const fs = require('fs');
const path = require('path');

console.log('🔧 Configuring Android Native Bridge & Signing...');

const rootDir = __dirname;
const androidDir = path.join(rootDir, 'android');
const appDir = path.join(androidDir, 'app');

if (!fs.existsSync(androidDir)) {
    console.error('❌ android/ folder not found. Run cap add android first.');
    process.exit(1);
}

// 1. Configure MainActivity.java with NotybookNative bridge for direct Downloads save
const javaDir = path.join(appDir, 'src', 'main', 'java', 'com', 'notybook', 'app');
const mainActivityPath = path.join(javaDir, 'MainActivity.java');

const mainActivityContent = `package com.notybook.app;

import android.os.Bundle;
import android.os.Environment;
import android.webkit.JavascriptInterface;
import android.widget.Toast;
import android.media.MediaScannerConnection;
import com.getcapacitor.BridgeActivity;
import java.io.File;
import java.io.FileOutputStream;
import java.nio.charset.StandardCharsets;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        if (getBridge() != null && getBridge().getWebView() != null) {
            getBridge().getWebView().addJavascriptInterface(new NotybookNativeInterface(), "NotybookNative");
        }
    }

    public class NotybookNativeInterface {
        @JavascriptInterface
        public void saveBackupToDownloads(final String filename, final String content) {
            try {
                File downloadDir = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS);
                if (!downloadDir.exists()) {
                    downloadDir.mkdirs();
                }
                
                File outputFile = new File(downloadDir, filename);
                FileOutputStream fos = new FileOutputStream(outputFile);
                fos.write(content.getBytes(StandardCharsets.UTF_8));
                fos.flush();
                fos.close();

                // Scan file to make it immediately visible in Downloads app
                MediaScannerConnection.scanFile(
                    MainActivity.this,
                    new String[]{outputFile.getAbsolutePath()},
                    new String[]{"application/json"},
                    null
                );

                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        Toast.makeText(MainActivity.this, "📥 Backup saved directly to Downloads: " + filename, Toast.LENGTH_LONG).show();
                    }
                });
            } catch (final Exception e) {
                e.printStackTrace();
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        Toast.makeText(MainActivity.this, "❌ Failed to save: " + e.getMessage(), Toast.LENGTH_LONG).show();
                    }
                });
            }
        }
    }
}
`;

if (fs.existsSync(javaDir)) {
    fs.writeFileSync(mainActivityPath, mainActivityContent, 'utf8');
    console.log('  ✓ Configured MainActivity.java with Native Downloads Bridge');
}

// 2. Configure AndroidManifest.xml for storage permissions
const manifestPath = path.join(appDir, 'src', 'main', 'AndroidManifest.xml');
if (fs.existsSync(manifestPath)) {
    let manifest = fs.readFileSync(manifestPath, 'utf8');
    if (!manifest.includes('android.permission.WRITE_EXTERNAL_STORAGE')) {
        manifest = manifest.replace(
            '<application',
            `<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" android:maxSdkVersion="32" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" android:maxSdkVersion="28" />
    <application android:requestLegacyExternalStorage="true"`
        );
        fs.writeFileSync(manifestPath, manifest, 'utf8');
        console.log('  ✓ Injected storage permissions into AndroidManifest.xml');
    }
}

// 3. Configure Signing in android/app/build.gradle with persistent notybook.keystore
const buildGradlePath = path.join(appDir, 'build.gradle');
if (fs.existsSync(buildGradlePath)) {
    let buildGradle = fs.readFileSync(buildGradlePath, 'utf8');
    
    // Copy notybook.keystore into android/app/
    const srcKeystore = path.join(rootDir, 'notybook.keystore');
    const destKeystore = path.join(appDir, 'notybook.keystore');
    if (fs.existsSync(srcKeystore)) {
        fs.copyFileSync(srcKeystore, destKeystore);
        console.log('  ✓ Copied persistent notybook.keystore to android/app/');
    }

    const signingConfigBlock = `
    signingConfigs {
        release {
            storeFile file('notybook.keystore')
            storePassword 'notybook123'
            keyAlias 'notybookkey'
            keyPassword 'notybook123'
        }
    }
    buildTypes {
        debug {
            signingConfig signingConfigs.release
        }
        release {
            signingConfig signingConfigs.release
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }
`;

    if (!buildGradle.includes('signingConfigs {')) {
        // Match full nested buildTypes { ... } block (closing both release and buildTypes)
        buildGradle = buildGradle.replace(/buildTypes\s*\{[\s\S]*?\}\s*\}/, signingConfigBlock.trim());
        fs.writeFileSync(buildGradlePath, buildGradle, 'utf8');
        console.log('  ✓ Injected persistent signing config into app/build.gradle');
    }
}

console.log('✅ Android native configuration completed successfully!');
