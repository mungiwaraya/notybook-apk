const { app, BrowserWindow, shell } = require('electron');
const path = require('path');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1140,
        height: 760,
        minWidth: 720,
        minHeight: 500,
        backgroundColor: '#1e1e24',
        title: 'Notybook - Luxury Dark Minimalist Encrypted Notes',
        autoHideMenuBar: true,
        show: false,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            sandbox: true,
            spellcheck: false
        }
    });

    // Load packaged www/index.html
    const indexPath = path.join(__dirname, 'www', 'index.html');
    mainWindow.loadFile(indexPath);

    // Show window once ready to avoid white flash
    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });

    // Open external links in default browser
    mainWindow.webContents.setWindowOpenHandler(({ url }) => {
        if (url.startsWith('https:') || url.startsWith('http:')) {
            shell.openExternal(url);
            return { action: 'deny' };
        }
        return { action: 'allow' };
    });
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
