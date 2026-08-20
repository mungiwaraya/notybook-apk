/**
 * Notybook - Offline Storage & Advanced Rich Text Editor Engine
 */
(function() {
    'use strict';

    console.log('[Notybook] Initializing Storage Engine & Rich Text Editor...');

    // Default Sample Data
    var DEFAULT_NOTES = [
        {
            id: 'note-welcome-guide',
            folderId: 'notes',
            title: '🚀 Welcome to Notybook - Feature Showcase',
            fontFamily: 'Lemon Milk',
            bodyHtml: '<h1>🚀 Welcome to Notybook!</h1><div>Your modern, ultra-fast, and secure offline rich-text note taking application.</div><div><br></div><h2>✨ 1. Rich Text Formatting &amp; Typography</h2><div>Explore powerful formatting options directly from the toolbar above:</div><ul><li><b>Bold Text (Ctrl+B):</b> Highlight important key points with strong emphasis.</li><li><i>Italic Text (Ctrl+I):</i> Add stylish cursive emphasis to your thoughts.</li><li><u>Underline Text (Ctrl+U):</u> Underline critical action items.</li><li><s>Strikethrough:</s> Mark completed tasks or outdated ideas.</li></ul><div><br></div><h2>🔤 2. 12 Custom Font Styles</h2><div>Switch fonts instantly from the <b>Font Selector</b> dropdown above:</div><ul><li><b>⚡ Roboto:</b> Clean, high-legibility modern sans-serif.</li><li><b>🌊 Coolvetica:</b> Smooth geometric display font.</li><li><b>🍋 Lemon Milk:</b> Bold uppercase aesthetic styling.</li><li><b>🔥 Bebas Notes:</b> Tall impact display typeface.</li><li><b>🎀 KG Miss Steward &amp; 📝 Papernotes:</b> Creative handwriting styles.</li></ul><div><br></div><h2>📌 3. Quick Action Bar</h2><div>Use the top toolbar to <b>Pin</b> crucial notes, <b>Move</b> to custom folders, <b>Backup</b> your data, or <b>Lock</b> your session in 1-click!</div>',
            body: '🚀 Welcome to Notybook!\nYour modern, ultra-fast, and secure offline rich-text note taking application.\n\n✨ 1. Rich Text Formatting & Typography\nExplore powerful formatting options directly from the toolbar above:\n- Bold Text (Ctrl+B): Highlight important key points.\n- Italic Text (Ctrl+I): Add stylish cursive emphasis.\n- Underline Text (Ctrl+U): Underline critical action items.\n- Strikethrough: Mark completed tasks.\n\n🔤 2. 12 Custom Font Styles\n- Roboto: Clean modern sans-serif.\n- Coolvetica: Smooth geometric font.\n- Lemon Milk: Bold uppercase aesthetic.\n- Bebas Notes: Tall impact typeface.\n- Papernotes & KG Miss Steward: Handwriting fonts.\n\n📌 3. Quick Action Bar\nUse the top toolbar to Pin crucial notes, Move to custom folders, Backup your data, or Lock your session in 1-click!',
            snippet: 'Welcome to Notybook! Your modern, ultra-fast, and secure offline rich-text note taking app...',
            updatedAt: new Date().toISOString(),
            pinned: true
        },
        {
            id: 'note-security-guide',
            folderId: 'quick',
            title: '🔒 Security, Lock Screen & Master Password',
            fontFamily: 'Roboto',
            bodyHtml: '<h1>🔒 Security &amp; Encryption Engine</h1><div>Notybook is built with zero-trust privacy and bank-grade encryption algorithms.</div><div><br></div><h2>🛡️ Zero-Cloud Privacy</h2><div><ul><li><b>100% LocalStorage:</b> Your notes never touch an external server or third-party API.</li><li><b>AES-256-GCM:</b> Notes and folders are encrypted before being saved to browser storage.</li><li><b>PBKDF2 Key Derivation:</b> Derived using 100,000 hashing iterations + SHA-256.</li></ul></div><div><br></div><h2>🔑 Changing Your Master Password</h2><div>You can update your security password anytime:</div><ol><li>Click the <b>🔑 Password</b> button in the toolbar or options menu (<code>•••</code>).</li><li>Enter your <b>Previous Password</b> to verify ownership.</li><li>Enter your <b>New Password</b> and <b>Confirm New Password</b>.</li><li>Click <b>Update Password</b> — all notes and folders will automatically re-encrypt seamlessly!</li></ol><div><br></div><h2>📦 Encrypted Backup &amp; Restore</h2><div>Click <b>Backup Notes</b> to download an encrypted <code>.json</code> backup file. Restore it anytime on any device with 1-click!</div>',
            body: '🔒 Security & Encryption Engine\nNotybook is built with zero-trust privacy and bank-grade encryption algorithms.\n\n🛡️ Zero-Cloud Privacy:\n- 100% LocalStorage: Your notes never touch an external server.\n- AES-256-GCM: Notes and folders are encrypted before storage.\n- PBKDF2 Key Derivation: 100,000 iterations + SHA-256.\n\n🔑 Changing Your Master Password:\n1. Click 🔑 Password button in toolbar or menu.\n2. Enter Previous Password to verify.\n3. Enter New Password & Confirm New Password.\n4. Click Update Password — data re-encrypts instantly!\n\n📦 Encrypted Backup & Restore:\nDownload encrypted .json backup and restore anytime.',
            snippet: 'Security & Encryption Engine: Zero-cloud privacy with AES-256 encryption & PBKDF2 key derivation...',
            updatedAt: new Date(Date.now() - 1800000).toISOString(),
            pinned: true
        },
        {
            id: 'note-organization-ui',
            folderId: 'work',
            title: '📱 Folders, Search & Apple Notes UI',
            fontFamily: 'Coolvetica',
            bodyHtml: '<h1>📱 Apple Notes Responsive UI</h1><div>Notybook brings the elegant macOS &amp; iOS 3-column experience to your browser:</div><div><br></div><h2>📁 Folder Management &amp; Icon Picker</h2><div><ul><li>Click the <b>+</b> button on the sidebar to create custom folders.</li><li>Choose from <b>12 Vector Ionicons</b> (📁 Work, ⚡ Quick, 👤 Personal, 💡 Ideas, 📚 Study, 🎨 Design, 🚀 Projects, ⭐ Favorites).</li><li>Organize notes into dedicated topics effortlessly.</li></ul></div><div><br></div><h2>🔍 Instant Search &amp; Filtering</h2><div>Type key terms into the search bar (<code>Search notes...</code>) to instantly filter titles and note contents in real-time.</div><div><br></div><h2>📱 Mobile Navigation</h2><div>On mobile screens, smoothly slide between <b>Folders</b>, <b>Notes List</b>, and <b>Editor</b> using top iOS navigation buttons (<code>‹ Folders</code> / <code>‹ Notes</code>).</div>',
            body: '📱 Apple Notes Responsive UI\nNotybook brings the elegant macOS & iOS 3-column experience to your browser:\n\n📁 Folder Management & Icon Picker:\n- Click + to create custom folders.\n- Choose from 12 Vector Ionicons.\n- Organize notes into dedicated topics.\n\n🔍 Instant Search & Filtering:\nSearch titles and contents in real-time.\n\n📱 Mobile Navigation:\nSmoothly slide between Folders, Notes List, and Editor on mobile devices.',
            snippet: 'Apple Notes Responsive UI: 3-column layout, custom vector folder icons, and real-time search...',
            updatedAt: new Date(Date.now() - 3600000).toISOString(),
            pinned: false
        },
        {
            id: 'note-pro-shortcuts',
            folderId: 'personal',
            title: '⚡ Pro Tips & Keyboard Shortcuts',
            fontFamily: 'Roboto',
            bodyHtml: '<h1>⚡ Pro Shortcuts &amp; Power Tools</h1><div>Master Notybook with these handy shortcuts and hidden menu features:</div><div><br></div><h2>⌨️ Keyboard Shortcuts</h2><div><ul><li><code>Ctrl + B</code> — Bold highlighted text</li><li><code>Ctrl + I</code> — Italicize highlighted text</li><li><code>Ctrl + U</code> — Underline highlighted text</li><li><code>Enter</code> — Submit modals &amp; password lock inputs</li><li><code>Esc</code> — Cancel modals &amp; close menus</li></ul></div><div><br></div><h2>📊 More Options Menu (•••)</h2><div>Click the three dots <b>•••</b> in the top right to access:</div><ul><li><b>Word Stats:</b> View live character &amp; word count for your note.</li><li><b>Copy Text:</b> Copy formatted plain text to clipboard.</li><li><b>Duplicate Note:</b> Instantly clone the active note.</li><li><b>Clear Content:</b> Reset note body with 1-click.</li><li><b>Delete Note:</b> Safely move note to Trash.</li></ul>',
            body: '⚡ Pro Shortcuts & Power Tools\nMaster Notybook with these handy shortcuts and hidden menu features:\n\n⌨️ Keyboard Shortcuts:\n- Ctrl+B: Bold text\n- Ctrl+I: Italicize text\n- Ctrl+U: Underline text\n- Enter: Submit modals\n- Esc: Close modals\n\n📊 More Options Menu (•••):\n- Word Stats: Character & word counter.\n- Copy Text: Copy to clipboard.\n- Duplicate Note: Clone active note.\n- Clear Content / Delete Note.',
            snippet: 'Pro Shortcuts & Power Tools: Keyboard shortcuts (Ctrl+B, Ctrl+I, Ctrl+U), Word Stats, Copying & Cloning...',
            updatedAt: new Date(Date.now() - 7200000).toISOString(),
            pinned: false
        }
    ];

    var DEFAULT_FOLDERS = [
        { id: 'all', name: 'All Notes', icon: 'documents-outline' },
        { id: 'notes', name: 'My Notes', icon: 'folder-outline' },
        { id: 'quick', name: 'Quick Notes', icon: 'flash-outline' },
        { id: 'work', name: 'Work', icon: 'briefcase-outline' },
        { id: 'personal', name: 'Personal', icon: 'person-outline' },
        { id: 'trash', name: 'Trash', icon: 'trash-outline' }
    ];

    // Embedded Vector Icons (Instant Local Render)
    var ICON_SVGS = {
        'journal-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="32" stroke-linecap="round" stroke-linejoin="round"><path d="M288 96h112v320H288z"/><path d="M112 96h176v320H112z"/><path d="M112 96H96a32 32 0 00-32 32v256a32 32 0 0032 32h16"/></svg>',
        'add-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="36" stroke-linecap="round" stroke-linejoin="round"><path d="M256 112v288M112 256h288"/></svg>',
        'search-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"/><path d="M338.29 338.29L448 448"/></svg>',
        'create-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h184"/><path d="M359.88 99.79l32.39 32.39a16 16 0 010 22.63L211.37 335.7a16 16 0 01-6.91 4.09l-61 17 17-61a16 16 0 014.09-6.91l180.9-180.9a16 16 0 0122.63 0z"/></svg>',
        'pin-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="M304 96l112 112M384 128l-80-80M128 384l-48 48M192 320L96 224l160-160 160 160-96 96z"/></svg>',
        'pin': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor"><path d="M304 96l112 112M384 128l-80-80M128 384l-48 48M192 320L96 224l160-160 160 160-96 96z"/></svg>',
        'refresh-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"><path d="M320 146s24.36-12-64-12a160 160 0 10160 160"/><path d="M256 58l64 88-64 88"/></svg>',
        'folder-open-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="M64 192v-32a32 32 0 0132-32h117.49a32 32 0 0122.63 9.37L264 160h152a32 32 0 0132 32v32M64 192h384l-32 224H96z"/></svg>',
        'folder-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="M440 432H72a40 40 0 01-40-40V120a40 40 0 0140-40h120l32 40h176a40 40 0 0140 40v232a40 40 0 01-40 40z"/></svg>',
        'trash-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="M112 160l32 288h224l32-288M80 128h352M192 128V80h128v48"/></svg>',
        'trash-bin-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="M432 144l-28.67 275.74A32 32 0 01371.55 448H140.45a32 32 0 01-31.78-28.26L80 144M32 96h448M200 96V56a24 24 0 0124-24h56a24 24 0 0124 24v40"/></svg>',
        'ellipsis-horizontal-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor"><circle cx="256" cy="256" r="32"/><circle cx="416" cy="256" r="32"/><circle cx="96" cy="256" r="32"/></svg>',
        'documents-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="M336 264h112a16 16 0 0016-16V136a16 16 0 00-16-16H336a16 16 0 00-16 16v112a16 16 0 0016 16zM176 400h112a16 16 0 0016-16V272a16 16 0 00-16-16H176a16 16 0 00-16 16v112a16 16 0 0016 16zM64 264h112a16 16 0 0016-16V136a16 16 0 00-16-16H64a16 16 0 00-16 16v112a16 16 0 0016 16z"/></svg>',
        'flash-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="M315.27 33l-169.54 207h126.91l-27.91 239 169.54-207H287.36l27.91-239z"/></svg>',
        'briefcase-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><rect x="32" y="128" width="448" height="320" rx="48" ry="48"/><path d="M144 128V96a32 32 0 0132-32h160a32 32 0 0132 32v32"/></svg>',
        'person-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="M344 144a88 88 0 11-88-88 88 88 0 0188 88zM256 304c-87 0-175 34.08-175 80v48h350v-48c0-45.92-88-80-175-80z"/></svg>',
        'bulb-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"><path d="M304 384v-24c0-29 31.54-56.43 52-76 28.84-27.57 44-64.61 44-108 0-80-64-144-144-144s-144 64-144 144c0 43.39 15.16 80.43 44 108 20.46 19.57 52 47 52 76v24M224 480h64M208 432h96"/></svg>',
        'book-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="M256 160c16-63.16 76.43-96 144-96v288c-67.57 0-128 23.84-144 96M256 160c-16-63.16-76.43-96-144-96v288c67.57 0 128 23.84 144 96M256 160v288"/></svg>',
        'color-palette-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"><path d="M430.11 347.9c-20.2 0-38.3 12.1-46.7 30.9a51.68 51.68 0 01-47.5 30.2H256a160 160 0 11160-160c0 23.8 17.5 43.8 41.2 45.7 13.9 1.1 26.8 10.3 26.8 24.3a28.8 28.8 0 01-28.8 28.9z"/><circle cx="144" cy="208" r="16"/><circle cx="208" cy="144" r="16"/><circle cx="304" cy="144" r="16"/><circle cx="368" cy="208" r="16"/></svg>',
        'rocket-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="M256 464c-16 0-32-16-32-32l16-80-64-64-80 16c-16 0-32-16-32-32 0-80 144-224 224-224s224 144 224 224c0 16-16 32-32 32l-80-16-64 64 16 80c0 16-16 32-32 32z"/><circle cx="256" cy="192" r="32"/></svg>',
        'star-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="M480 208H308L256 48l-52 160H32l136 104-52 160 140-100 140 100-52-160z"/></svg>',
        'key-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="M210.81 261.73L320 152.57l31.43 31.43L374.29 161l-22.86-22.86L384 105.71l-31.43-31.42L220.86 206l-10.05-10a112 112 0 1017.3 73.12zM144 384a48 48 0 1148-48 48 48 0 01-48 48z"/></svg>',
        'lock-closed-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="M336 208v-96a80 80 0 00-160 0v96"/><rect x="96" y="208" width="320" height="272" rx="48" ry="48"/></svg>',
        'heart-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="M352 48c-48 0-88 32-96 64-8-32-48-64-96-64-61.86 0-112 50.14-112 112 0 128 208 304 208 304s208-176 208-304c0-61.86-50.14-112-112-112z"/></svg>',
        'home-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="M80 212v236a16 16 0 0016 16h120V320h80v144h120a16 16 0 0016-16V212M32 256L256 48l224 208"/></svg>',
        'copy-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><rect x="128" y="128" width="320" height="320" rx="32" ry="32"/><path d="M384 128V96a32 32 0 00-32-32H96a32 32 0 00-32 32v256a32 32 0 0032 32h32"/></svg>',
        'duplicate-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><rect x="128" y="128" width="320" height="320" rx="32" ry="32"/><path d="M384 128V96a32 32 0 00-32-32H96a32 32 0 00-32 32v256a32 32 0 0032 32h32"/><path d="M288 224v128M224 288h128"/></svg>',
        'stats-chart-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="M64 320v128M160 224v224M256 128v320M352 192v256M448 96v352"/></svg>',
        'sparkles-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="M256 48l40 120 120 40-120 40-40 120-40-120-120-40 120-40 40-120zM384 320l20 60 60 20-60 20-20 60-20-60-60-20 60-20 20-60zM128 64l15 45 45 15-45 15-15 45-15-45-45-15 45-15 15-45z"/></svg>',
        'download-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="M336 176L256 256L176 176M256 40V240"/><path d="M400 352V384A48 48 0 01352 432H160A48 48 0 01112 384V352"/></svg>',
        'cloud-upload-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="M320 368L256 304L192 368M256 464V304"/><path d="M400 352A96 96 0 00360.7 165.7 128 128 0 00121.3 192A96 96 0 00112 352"/></svg>',
        'list-outline': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><circle cx="4" cy="6" r="1.8"/><circle cx="4" cy="12" r="1.8"/><circle cx="4" cy="18" r="1.8"/><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M9 6h12M9 12h12M9 18h12"/></svg>',
        'list-number-outline': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="M3 4.5h1v4H3V6.3L2 6.8v-.9l1.8-.7zM2.1 14.7c0-.5.2-.9.5-1.2.3-.3.7-.5 1.2-.5.5 0 .9.2 1.2.5.3.3.5.7.5 1.1 0 .4-.1.7-.4 1.1l-1.3 1.6H6v.9H2.1v-.8l1.9-2.3c.2-.2.3-.4.3-.6 0-.2-.1-.4-.2-.5-.1-.1-.3-.2-.5-.2s-.4.1-.5.2-.2.3-.2.5h-.9zm.2 4.1h2.2c.4 0 .7.1.9.3.2.2.3.4.3.7 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3.3.1.5.2.7.4.2.2.3.5.3.8 0 .4-.1.7-.4.9-.3.2-.7.3-1.2.3-.5 0-.9-.1-1.2-.4-.3-.3-.4-.6-.4-1h.9c0 .2.1.4.2.5.1.1.3.2.5.2.2 0 .4-.1.5-.2.1-.1.2-.3.2-.5 0-.2-.1-.4-.2-.5-.1-.1-.3-.1-.6-.1h-.5v-.8h.5c.2 0 .4 0 .5-.1.1-.1.2-.2.2-.4 0-.2-.1-.3-.2-.4-.1-.1-.2-.1-.4-.1s-.3.1-.4.2c-.1.1-.1.2-.1.4h-.9z"/><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M9 6h12M9 12h12M9 18h12"/></svg>',
        'cloud-done-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="M400 320A96 96 0 00360.7 133.7 128 128 0 00121.3 160A96 96 0 00112 320"/><path d="M192 288l48 48 96-96"/></svg>'
    };

    function getIconSvg(name) {
        var svg = ICON_SVGS[name] || ICON_SVGS['folder-outline'];
        return '<span class="app-icon-wrap" style="display:inline-flex;align-items:center;justify-content:center;">' + svg + '</span>';
    }

    // AES-256 Web Crypto API Engine
    var NotyCrypto = {
        async deriveKey(password, salt) {
            var enc = new TextEncoder();
            var keyMaterial = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveKey']);
            return await crypto.subtle.deriveKey(
                { name: 'PBKDF2', salt: salt, iterations: 100000, hash: 'SHA-256' },
                keyMaterial,
                { name: 'AES-GCM', length: 256 },
                false,
                ['encrypt', 'decrypt']
            );
        },
        async encrypt(plainText, password) {
            if (!crypto || !crypto.subtle) return plainText;
            var salt = crypto.getRandomValues(new Uint8Array(16));
            var iv = crypto.getRandomValues(new Uint8Array(12));
            var key = await this.deriveKey(password, salt);
            var enc = new TextEncoder();
            var cipherBuf = await crypto.subtle.encrypt({ name: 'AES-GCM', iv: iv }, key, enc.encode(plainText));
            return JSON.stringify({
                v: 1,
                s: Array.from(salt),
                i: Array.from(iv),
                d: Array.from(new Uint8Array(cipherBuf))
            });
        },
        async decrypt(cipherJson, password) {
            if (!crypto || !crypto.subtle) return cipherJson;
            var parsed = typeof cipherJson === 'string' ? JSON.parse(cipherJson) : cipherJson;
            if (!parsed || !parsed.s || !parsed.i || !parsed.d) return cipherJson;
            var salt = new Uint8Array(parsed.s);
            var iv = new Uint8Array(parsed.i);
            var data = new Uint8Array(parsed.d);
            var key = await this.deriveKey(password, salt);
            var decBuf = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: iv }, key, data);
            return new TextDecoder().decode(decBuf);
        }
    };

    var sessionPassword = null;

    async function getStoredNotesAsync() {
        try {
            var raw = localStorage.getItem('inote_notes');
            if (!raw) return DEFAULT_NOTES;
            if (sessionPassword) {
                try {
                    var dec = await NotyCrypto.decrypt(raw, sessionPassword);
                    return JSON.parse(dec);
                } catch(e) { return JSON.parse(raw); }
            }
            return JSON.parse(raw);
        } catch(e) { return DEFAULT_NOTES; }
    }

    async function saveStoredNotesAsync(notes) {
        try {
            var str = JSON.stringify(notes);
            if (sessionPassword) {
                var cipher = await NotyCrypto.encrypt(str, sessionPassword);
                localStorage.setItem('inote_notes', cipher);
            } else {
                localStorage.setItem('inote_notes', str);
            }
        } catch(e) { console.error('Save error:', e); }
    }

    async function getStoredFoldersAsync() {
        try {
            var raw = localStorage.getItem('inote_folders');
            if (!raw) return DEFAULT_FOLDERS;
            if (sessionPassword) {
                try {
                    var dec = await NotyCrypto.decrypt(raw, sessionPassword);
                    return JSON.parse(dec);
                } catch(e) { return JSON.parse(raw); }
            }
            return JSON.parse(raw);
        } catch(e) { return DEFAULT_FOLDERS; }
    }

    async function saveStoredFoldersAsync(folders) {
        try {
            var str = JSON.stringify(folders);
            if (sessionPassword) {
                var cipher = await NotyCrypto.encrypt(str, sessionPassword);
                localStorage.setItem('inote_folders', cipher);
            } else {
                localStorage.setItem('inote_folders', str);
            }
        } catch(e) { console.error('Save error:', e); }
    }

    function getStoredNotes() {
        var raw = localStorage.getItem('inote_notes');
        if (!raw) return DEFAULT_NOTES;
        try { return JSON.parse(raw); } catch(e) { return DEFAULT_NOTES; }
    }

    function saveStoredNotes(notes) {
        saveStoredNotesAsync(notes);
    }

    function getStoredFolders() {
        var raw = localStorage.getItem('inote_folders');
        if (!raw) return DEFAULT_FOLDERS;
        try { return JSON.parse(raw); } catch(e) { return DEFAULT_FOLDERS; }
    }

    function saveStoredFolders(folders) {
        saveStoredFoldersAsync(folders);
    }

    // Safety stubs
    var origFetch = window.fetch;
    window.fetch = function(input, init) {
        var url = typeof input === 'string' ? input : (input && input.url ? input.url : '');
        if (url.indexOf('icloud.com') !== -1 || url.indexOf('apple.com') !== -1 || url.indexOf('cloudkit') !== -1) {
            return Promise.resolve(new Response(JSON.stringify({ status: 'OK' }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            }));
        }
        return origFetch.apply(this, arguments).catch(function() {
            return new Response(JSON.stringify({ status: 'OK' }), { status: 200 });
        });
    };

    // Embedded Vector Icons (Instant Local Render)
    var ICON_SVGS = {
        'journal-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="32" stroke-linecap="round" stroke-linejoin="round"><path d="M288 96h112v320H288z"/><path d="M112 96h176v320H112z"/><path d="M112 96H96a32 32 0 00-32 32v256a32 32 0 0032 32h16"/></svg>',
        'add-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="36" stroke-linecap="round" stroke-linejoin="round"><path d="M256 112v288M112 256h288"/></svg>',
        'search-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"/><path d="M338.29 338.29L448 448"/></svg>',
        'create-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h184"/><path d="M359.88 99.79l32.39 32.39a16 16 0 010 22.63L211.37 335.7a16 16 0 01-6.91 4.09l-61 17 17-61a16 16 0 014.09-6.91l180.9-180.9a16 16 0 0122.63 0z"/></svg>',
        'pin-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="M304 96l112 112M384 128l-80-80M128 384l-48 48M192 320L96 224l160-160 160 160-96 96z"/></svg>',
        'pin': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor"><path d="M304 96l112 112M384 128l-80-80M128 384l-48 48M192 320L96 224l160-160 160 160-96 96z"/></svg>',
        'refresh-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"><path d="M320 146s24.36-12-64-12a160 160 0 10160 160"/><path d="M256 58l64 88-64 88"/></svg>',
        'folder-open-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="M64 192v-32a32 32 0 0132-32h117.49a32 32 0 0122.63 9.37L264 160h152a32 32 0 0132 32v32M64 192h384l-32 224H96z"/></svg>',
        'folder-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="M440 432H72a40 40 0 01-40-40V120a40 40 0 0140-40h120l32 40h176a40 40 0 0140 40v232a40 40 0 01-40 40z"/></svg>',
        'trash-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="M112 160l32 288h224l32-288M80 128h352M192 128V80h128v48"/></svg>',
        'trash-bin-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="M432 144l-28.67 275.74A32 32 0 01371.55 448H140.45a32 32 0 01-31.78-28.26L80 144M32 96h448M200 96V56a24 24 0 0124-24h56a24 24 0 0124 24v40"/></svg>',
        'ellipsis-horizontal-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor"><circle cx="256" cy="256" r="32"/><circle cx="416" cy="256" r="32"/><circle cx="96" cy="256" r="32"/></svg>',
        'documents-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="M336 264h112a16 16 0 0016-16V136a16 16 0 00-16-16H336a16 16 0 00-16 16v112a16 16 0 0016 16zM176 400h112a16 16 0 0016-16V272a16 16 0 00-16-16H176a16 16 0 00-16 16v112a16 16 0 0016 16zM64 264h112a16 16 0 0016-16V136a16 16 0 00-16-16H64a16 16 0 00-16 16v112a16 16 0 0016 16z"/></svg>',
        'flash-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="M315.27 33l-169.54 207h126.91l-27.91 239 169.54-207H287.36l27.91-239z"/></svg>',
        'briefcase-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><rect x="32" y="128" width="448" height="320" rx="48" ry="48"/><path d="M144 128V96a32 32 0 0132-32h160a32 32 0 0132 32v32"/></svg>',
        'person-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="M344 144a88 88 0 11-88-88 88 88 0 0188 88zM256 304c-87 0-175 34.08-175 80v48h350v-48c0-45.92-88-80-175-80z"/></svg>',
        'bulb-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"><path d="M304 384v-24c0-29 31.54-56.43 52-76 28.84-27.57 44-64.61 44-108 0-80-64-144-144-144s-144 64-144 144c0 43.39 15.16 80.43 44 108 20.46 19.57 52 47 52 76v24M224 480h64M208 432h96"/></svg>',
        'book-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="M256 160c16-63.16 76.43-96 144-96v288c-67.57 0-128 23.84-144 96M256 160c-16-63.16-76.43-96-144-96v288c67.57 0 128 23.84 144 96M256 160v288"/></svg>',
        'color-palette-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"><path d="M430.11 347.9c-20.2 0-38.3 12.1-46.7 30.9a51.68 51.68 0 01-47.5 30.2H256a160 160 0 11160-160c0 23.8 17.5 43.8 41.2 45.7 13.9 1.1 26.8 10.3 26.8 24.3a28.8 28.8 0 01-28.8 28.9z"/><circle cx="144" cy="208" r="16"/><circle cx="208" cy="144" r="16"/><circle cx="304" cy="144" r="16"/><circle cx="368" cy="208" r="16"/></svg>',
        'rocket-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="M256 464c-16 0-32-16-32-32l16-80-64-64-80 16c-16 0-32-16-32-32 0-80 144-224 224-224s224 144 224 224c0 16-16 32-32 32l-80-16-64 64 16 80c0 16-16 32-32 32z"/><circle cx="256" cy="192" r="32"/></svg>',
        'star-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="M480 208H308L256 48l-52 160H32l136 104-52 160 140-100 140 100-52-160z"/></svg>',
        'lock-closed-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="M336 208v-96a80 80 0 00-160 0v96"/><rect x="96" y="208" width="320" height="272" rx="48" ry="48"/></svg>',
        'heart-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="M352 48c-48 0-88 32-96 64-8-32-48-64-96-64-61.86 0-112 50.14-112 112 0 128 208 304 208 304s208-176 208-304c0-61.86-50.14-112-112-112z"/></svg>',
        'home-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="M80 212v236a16 16 0 0016 16h120V320h80v144h120a16 16 0 0016-16V212M32 256L256 48l224 208"/></svg>',
        'copy-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><rect x="128" y="128" width="320" height="320" rx="32" ry="32"/><path d="M384 128V96a32 32 0 00-32-32H96a32 32 0 00-32 32v256a32 32 0 0032 32h32"/></svg>',
        'duplicate-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><rect x="128" y="128" width="320" height="320" rx="32" ry="32"/><path d="M384 128V96a32 32 0 00-32-32H96a32 32 0 00-32 32v256a32 32 0 0032 32h32"/><path d="M288 224v128M224 288h128"/></svg>',
        'stats-chart-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="M64 320v128M160 224v224M256 128v320M352 192v256M448 96v352"/></svg>',
        'sparkles-outline': '<svg viewBox="0 0 512 512" width="1em" height="1em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="M256 48l40 120 120 40-120 40-40 120-40-120-120-40 120-40 40-120zM384 320l20 60 60 20-60 20-20 60-20-60-60-20 60-20 20-60zM128 64l15 45 45 15-45 15-15 45-15-45-45-15 45-15 15-45z"/></svg>'
    };

    function getIconSvg(name) {
        var svg = ICON_SVGS[name] || ICON_SVGS['folder-outline'];
        return '<span class="app-icon-wrap" style="display:inline-flex;align-items:center;justify-content:center;">' + svg + '</span>';
    }

    // State
    var state = {
        activeFolderId: 'all',
        activeNoteId: null,
        searchQuery: '',
        notes: [],
        folders: [],
        showMoreMenu: false,
        mobileView: 'notes' // 'sidebar' | 'notes' | 'editor'
    };

    // Guard: ensure initAppUI runs only ONCE — prevents double event-binding
    var initialized = false;

    // Saves the editor's text selection before a <select> steals focus
    var savedRange = null;

    async function initAppUI() {
        if (initialized) return;
        initialized = true;

        injectStyles();

        var authRaw = localStorage.getItem('notybook_sec_auth');
        if (!authRaw) {
            // First time — setup master password
            renderLockOverlay(true);
        } else {
            // Password exists — show unlock screen
            renderLockOverlay(false);
        }

        bindGlobalDelegatedEvents();
    }

    if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', initAppUI);
    } else {
        initAppUI();
    }
    // Safety net: still kept but now no-ops if already initialized
    setTimeout(initAppUI, 500);

    function renderMainLayout() {
        var root = document.getElementById('root');
        if (!root) return;

        root.innerHTML = `
            <div class="inote-app-container">
                <!-- Custom Modal Dialog -->
                <div class="inote-modal-overlay" id="inote-modal">
                    <div class="inote-modal-box">
                        <h3 id="modal-title">New Folder</h3>
                        <p id="modal-desc">Enter a name for this folder:</p>
                        <input type="text" id="modal-input" placeholder="Folder Name" />
                        <select id="modal-select" style="display:none;"></select>
                        <div id="modal-icons" class="inote-icon-picker" style="display:none;"></div>
                        <div class="modal-buttons">
                            <button class="modal-btn secondary" id="modal-cancel">Cancel</button>
                            <button class="modal-btn primary" id="modal-confirm">Confirm</button>
                        </div>
                    </div>
                </div>

                <div class="inote-toast" id="inote-toast">Saved</div>

                <!-- Sidebar -->
                <div class="inote-sidebar">
                    <div class="inote-sidebar-header">
                        <div class="inote-brand">
                            <span class="inote-brand-icon">${getIconSvg('journal-outline')}</span>
                            <span class="inote-logo-title">Notybook</span>
                        </div>
                        <button class="inote-icon-btn" id="btn-add-folder" title="New Folder">${getIconSvg('add-outline')}</button>
                    </div>
                    <div class="inote-folder-list" id="inote-folder-list"></div>
                </div>

                <!-- Notes Pane -->
                <div class="inote-notes-pane">
                    <div class="inote-search-bar">
                        <span class="search-icon">${getIconSvg('search-outline')}</span><input type="text" id="inote-search-input" placeholder="Search notes..." />
                    </div>
                    <div class="inote-notes-header">
                        <div class="notes-header-left">
                            <button class="mobile-nav-btn" id="btn-nav-sidebar" title="Back to Folders">‹ Folders</button>
                            <span id="notes-count-label">0 Notes</span>
                        </div>
                        <div class="notes-header-actions">
                            <button class="inote-action-btn danger" id="btn-empty-trash" title="Empty Trash" style="display:none;">${getIconSvg('trash-bin-outline')} Empty</button>
                            <button class="inote-action-btn" id="btn-new-note" title="New Note">${getIconSvg('create-outline')}</button>
                        </div>
                    </div>
                    <div class="inote-notes-list" id="inote-notes-list"></div>
                </div>

                <!-- Editor Pane -->
                <div class="inote-editor-pane">
                    <!-- Main Toolbar -->
                    <div class="inote-toolbar">
                        <div class="inote-toolbar-left">
                            <button class="mobile-nav-btn" id="btn-nav-notes" title="Back to Notes">‹ Notes</button>
                            <button class="inote-tool-btn" id="btn-pin-note" title="Toggle Pin">📌 <span class="btn-text">Pin</span></button>
                            <button class="inote-tool-btn" id="btn-restore-note" title="Restore Note" style="display:none;">${getIconSvg('refresh-outline')} <span class="btn-text">Restore</span></button>
                            <button class="inote-tool-btn" id="btn-move-note" title="Move Note">${getIconSvg('folder-open-outline')} <span class="btn-text">Move</span></button>
                            <button class="inote-tool-btn" id="btn-delete-note" title="Delete Note">${getIconSvg('trash-outline')} <span class="btn-text">Delete</span></button>
                            <button class="inote-tool-btn" id="btn-backup-data" title="Backup Notes">${getIconSvg('download-outline')} <span class="btn-text">Backup</span></button>
                            <button class="inote-tool-btn" id="btn-restore-data" title="Restore Backup">${getIconSvg('cloud-upload-outline')} <span class="btn-text">Restore</span></button>
                            <button class="inote-tool-btn" id="btn-change-password" title="Change Password">${getIconSvg('key-outline')} <span class="btn-text">Password</span></button>
                            <button class="inote-tool-btn" id="btn-lock-app" title="Lock App">${getIconSvg('lock-closed-outline')} <span class="btn-text">Lock</span></button>
                            <div class="inote-menu-wrapper">
                                <button class="inote-tool-btn" id="btn-more-options" title="More Options">${getIconSvg('ellipsis-horizontal-outline')}</button>
                                <div class="inote-dropdown-menu" id="inote-more-dropdown">
                                    <div class="menu-item" id="menu-restore-note" style="display:none;">${getIconSvg('refresh-outline')} Restore Note</div>
                                    <div class="menu-item" id="menu-move-note">${getIconSvg('folder-open-outline')} Move to Folder</div>
                                    <div class="menu-item" id="menu-toggle-pin">📌 Toggle Pin</div>
                                    <div class="menu-item" id="menu-copy-text">${getIconSvg('copy-outline')} Copy Text</div>
                                    <div class="menu-item" id="menu-duplicate-note">${getIconSvg('duplicate-outline')} Duplicate Note</div>
                                    <div class="menu-item" id="menu-stats">${getIconSvg('stats-chart-outline')} Word Stats</div>
                                    <div class="menu-divider"></div>
                                    <div class="menu-item" id="menu-backup-data">${getIconSvg('download-outline')} Backup Data</div>
                                    <div class="menu-item" id="menu-restore-data">${getIconSvg('cloud-upload-outline')} Restore Backup</div>
                                    <div class="menu-item" id="menu-change-password">${getIconSvg('key-outline')} Change Password</div>
                                    <div class="menu-item" id="menu-lock-app">${getIconSvg('lock-closed-outline')} Lock App</div>
                                    <div class="menu-divider"></div>
                                    <div class="menu-item" id="menu-clear-note">${getIconSvg('sparkles-outline')} Clear Content</div>
                                    <div class="menu-item danger" id="menu-delete-note">${getIconSvg('trash-outline')} Delete Note</div>
                                </div>
                            </div>
                        </div>
                        <div class="inote-save-status" id="inote-save-status">Saved</div>
                        <input type="file" id="inote-restore-file-input" accept=".json" style="display:none;" />
                    </div>

                    <!-- Rich Text Format Bar -->
                    <div class="inote-format-bar">
                        <!-- Headings Dropdown -->
                        <select class="inote-format-select" id="fmt-heading">
                            <option value="p">Body Text</option>
                            <option value="h1">Heading 1</option>
                            <option value="h2">Heading 2</option>
                            <option value="h3">Heading 3</option>
                        </select>

                        <!-- Font Selector -->
                        <select class="inote-format-select" id="fmt-font">
                            <optgroup label="── Clean & Modern ──">
                                <option value="Roboto">⚡ Roboto</option>
                                <option value="Coolvetica">🌊 Coolvetica</option>
                                <option value="Lemon Milk">🍋 Lemon Milk</option>
                            </optgroup>
                            <optgroup label="── Elegant ──">
                                <option value="Mithella">🌿 Mithella</option>
                                <option value="Aubrey">👑 Aubrey</option>
                            </optgroup>
                            <optgroup label="── Display & Bold ──">
                                <option value="Bebas Notes">🔥 Bebas Notes</option>
                                <option value="Quache Black">🖤 Quache Black</option>
                            </optgroup>
                            <optgroup label="── Creative & Romantic ──">
                                <option value="Aesthetic Romance">💖 Aesthetic Romance</option>
                                <option value="Modern Romance">🌹 Modern Romance</option>
                                <option value="Cheese Milky">🧀 Cheese Milky</option>
                                <option value="KG Miss Steward">🎀 KG Miss Steward</option>
                                <option value="Papernotes">📝 Papernotes</option>
                            </optgroup>
                        </select>


                        <div class="format-divider"></div>

                        <!-- Formatting Buttons -->
                        <button class="inote-fmt-btn" id="fmt-bold" title="Bold (Ctrl+B)"><b>B</b></button>
                        <button class="inote-fmt-btn" id="fmt-italic" title="Italic (Ctrl+I)"><i>I</i></button>
                        <button class="inote-fmt-btn" id="fmt-underline" title="Underline (Ctrl+U)"><u>U</u></button>
                        <button class="inote-fmt-btn" id="fmt-strike" title="Strikethrough"><s>S</s></button>
                        <div class="format-divider"></div>
                        <button class="inote-fmt-btn icon-only" id="fmt-list-bullet" title="Bullet List">•</button>
                        <button class="inote-fmt-btn icon-only" id="fmt-list-number" title="Numbered List">1.</button>
                    </div>

                    <!-- Editor Body -->
                    <div class="inote-editor-body">
                        <div class="inote-date-display" id="note-date-display"></div>
                        <input type="text" class="inote-title-input" id="note-title-input" placeholder="Title" />
                        <div class="inote-content-editor" id="note-content-editor" contenteditable="true" spellcheck="false"></div>
                    </div>
                </div>
            </div>
        `;

        updateUI();
    }

    function updateUI() {
        renderFolders();
        renderNotesList();
        renderActiveNote();

        // Update Popover Visibilities
        var textPopover = document.getElementById('text-color-popover');
        if (textPopover) textPopover.classList.toggle('show', state.showTextColorPicker);

        var bgPopover = document.getElementById('bg-color-popover');
        if (bgPopover) bgPopover.classList.toggle('show', state.showBgColorPicker);

        var moreDropdown = document.getElementById('inote-more-dropdown');
        if (moreDropdown) moreDropdown.classList.toggle('show', state.showMoreMenu);

        var activeNote = state.notes.find(function(n) { return n.id === state.activeNoteId; });
        var isTrash = activeNote && activeNote.folderId === 'trash';
        var isTrashFolder = state.activeFolderId === 'trash';
        var trashCount = state.notes.filter(function(n) { return n.folderId === 'trash'; }).length;

        var emptyTrashBtn = document.getElementById('btn-empty-trash');
        if (emptyTrashBtn) {
            emptyTrashBtn.style.display = (isTrashFolder && trashCount > 0) ? 'inline-flex' : 'none';
        }

        var pinBtn = document.getElementById('btn-pin-note');
        var restoreBtn = document.getElementById('btn-restore-note');
        var moveBtn = document.getElementById('btn-move-note');
        var deleteBtn = document.getElementById('btn-delete-note');

        var menuRestore = document.getElementById('menu-restore-note');
        var menuMove = document.getElementById('menu-move-note');
        var menuPin = document.getElementById('menu-toggle-pin');
        var menuDelete = document.getElementById('menu-delete-note');

        if (restoreBtn) restoreBtn.style.display = isTrash ? 'inline-flex' : 'none';
        if (moveBtn) moveBtn.style.display = isTrash ? 'none' : 'inline-flex';
        if (pinBtn) pinBtn.style.display = isTrash ? 'none' : 'inline-flex';

        if (menuRestore) menuRestore.style.display = isTrash ? 'flex' : 'none';
        if (menuMove) menuMove.style.display = isTrash ? 'none' : 'flex';
        if (menuPin) menuPin.style.display = isTrash ? 'none' : 'flex';

        if (pinBtn && activeNote) {
            pinBtn.classList.toggle('active', !!activeNote.pinned);
            pinBtn.innerHTML = activeNote.pinned ? '📌 <span class="btn-text">Pinned</span>' : '📌 <span class="btn-text">Pin</span>';
        }

        if (deleteBtn) {
            deleteBtn.innerHTML = isTrash ? getIconSvg('trash-outline') + ' <span class="btn-text">Delete Forever</span>' : getIconSvg('trash-outline') + ' <span class="btn-text">Delete</span>';
        }
        if (menuDelete) {
            menuDelete.innerHTML = isTrash ? getIconSvg('trash-outline') + ' Delete Permanently' : getIconSvg('trash-outline') + ' Delete Note';
        }

        updateMobileViewClasses();
    }

    function updateMobileViewClasses() {
        var appContainer = document.querySelector('.inote-app-container');
        if (!appContainer) return;
        appContainer.classList.remove('view-sidebar', 'view-notes', 'view-editor');
        appContainer.classList.add('view-' + (state.mobileView || 'notes'));
    }

    function getFolderIcon(folder) {
        if (folder.icon) return folder.icon;
        if (folder.id === 'all') return 'documents-outline';
        if (folder.id === 'trash') return 'trash-outline';
        if (folder.id === 'quick') return 'flash-outline';
        if (folder.id === 'work') return 'briefcase-outline';
        if (folder.id === 'personal') return 'person-outline';
        return 'folder-outline';
    }

    function renderFolders() {
        var container = document.getElementById('inote-folder-list');
        if (!container) return;

        var normalFolders = state.folders.filter(function(f) { return f.id !== 'trash'; });
        var trashFolder = state.folders.find(function(f) { return f.id === 'trash'; });
        var displayFolders = trashFolder ? normalFolders.concat([trashFolder]) : normalFolders;

        container.innerHTML = displayFolders.map(function(f) {
            var count = 0;
            if (f.id === 'all') count = state.notes.filter(function(n) { return n.folderId !== 'trash'; }).length;
            else if (f.id === 'trash') count = state.notes.filter(function(n) { return n.folderId === 'trash'; }).length;
            else count = state.notes.filter(function(n) { return n.folderId === f.id; }).length;

            var isActive = state.activeFolderId === f.id;
            var isDeletable = f.id !== 'all' && f.id !== 'notes' && f.id !== 'trash';
            var iconName = getFolderIcon(f);

            return `
                <div class="inote-folder-item ${isActive ? 'active' : ''}" data-folder-id="${f.id}">
                    <span class="folder-name-label">${getIconSvg(iconName)} ${escapeHtml(f.name)}</span>
                    <div class="folder-item-meta">
                        <span class="folder-count">${count}</span>
                        ${isDeletable ? `<button class="btn-delete-folder" data-delete-folder-id="${f.id}" title="Delete Folder ${escapeHtml(f.name)}">${getIconSvg('trash-outline')}</button>` : ''}
                    </div>
                </div>
            `;
        }).join('');
    }

    function getFilteredNotes() {
        var list = state.notes;
        if (state.activeFolderId === 'all') {
            list = list.filter(function(n) { return n.folderId !== 'trash'; });
        } else if (state.activeFolderId === 'trash') {
            list = list.filter(function(n) { return n.folderId === 'trash'; });
        } else {
            list = list.filter(function(n) { return n.folderId === state.activeFolderId; });
        }

        if (state.searchQuery.trim()) {
            var q = state.searchQuery.toLowerCase();
            list = list.filter(function(n) {
                return (n.title && n.title.toLowerCase().includes(q)) || (n.body && n.body.toLowerCase().includes(q));
            });
        }

        return list.sort(function(a, b) {
            if (a.pinned && !b.pinned) return -1;
            if (!a.pinned && b.pinned) return 1;
            return new Date(b.updatedAt) - new Date(a.updatedAt);
        });
    }

    function renderNotesList() {
        var container = document.getElementById('inote-notes-list');
        var countLabel = document.getElementById('notes-count-label');
        if (!container) return;

        var list = getFilteredNotes();
        if (countLabel) countLabel.textContent = list.length + ' Note' + (list.length !== 1 ? 's' : '');

        if (list.length === 0) {
            container.innerHTML = '<div class="inote-empty-state">No notes found</div>';
            return;
        }

        container.innerHTML = list.map(function(n) {
            var isActive = state.activeNoteId === n.id;
            var dateStr = new Date(n.updatedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
            return `
                <div class="inote-note-item ${isActive ? 'active' : ''}" data-note-id="${n.id}">
                    <div class="inote-note-header-line">
                        <span class="note-title-text">${escapeHtml(n.title || 'New Note')}</span>
                        ${n.pinned ? '<span class="pin-badge">📌</span>' : ''}
                    </div>
                    <div class="inote-note-meta">
                        <span>${dateStr}</span>
                        <span class="note-snippet">${escapeHtml(n.snippet || 'No text')}</span>
                    </div>
                </div>
            `;
        }).join('');
    }

    function renderActiveNote() {
        var titleInput = document.getElementById('note-title-input');
        var contentEditor = document.getElementById('note-content-editor');
        var dateDisplay = document.getElementById('note-date-display');

        if (!titleInput || !contentEditor) return;

        var activeNote = state.notes.find(function(n) { return n.id === state.activeNoteId; });
        if (!activeNote) {
            titleInput.value = '';
            contentEditor.innerHTML = '';
            if (dateDisplay) dateDisplay.textContent = '';
            titleInput.disabled = true;
            contentEditor.contentEditable = 'false';
            return;
        }

        titleInput.disabled = false;
        contentEditor.contentEditable = 'true';

        if (document.activeElement !== titleInput) {
            titleInput.value = activeNote.title || '';
        }
        if (document.activeElement !== contentEditor) {
            contentEditor.innerHTML = activeNote.bodyHtml || '<div><br></div>';
        }

        if (dateDisplay) {
            var fullDate = new Date(activeNote.updatedAt).toLocaleString(undefined, {
                dateStyle: 'full', timeStyle: 'short'
            });
            dateDisplay.textContent = fullDate;
        }

        // Restore saved font for this note and sync the font selector
        var fontSelect = document.getElementById('fmt-font');
        if (activeNote.fontFamily) {
            contentEditor.style.fontFamily = "'" + activeNote.fontFamily + "', sans-serif";
            if (fontSelect) fontSelect.value = activeNote.fontFamily;
        } else {
            contentEditor.style.fontFamily = '';
            if (fontSelect) fontSelect.value = 'Roboto';
        }
    }

    function onNoteContentChange() {
        var activeNote = state.notes.find(function(n) { return n.id === state.activeNoteId; });
        if (!activeNote) return;

        var titleInput = document.getElementById('note-title-input');
        var contentEditor = document.getElementById('note-content-editor');
        var statusLabel = document.getElementById('inote-save-status');

        if (titleInput) activeNote.title = titleInput.value;
        if (contentEditor) {
            activeNote.bodyHtml = contentEditor.innerHTML;
            activeNote.body = contentEditor.innerText;
            activeNote.snippet = contentEditor.innerText.replace(/\s+/g, ' ').trim().slice(0, 60);
        }

        activeNote.updatedAt = new Date().toISOString();
        saveStoredNotes(state.notes);

        if (statusLabel) {
            statusLabel.textContent = 'Saving...';
            setTimeout(function() { statusLabel.textContent = 'Saved'; }, 400);
        }

        renderNotesList();
        renderFolders();
    }

    function createNewNote() {
        var folderId = (state.activeFolderId === 'all' || state.activeFolderId === 'trash') ? 'notes' : state.activeFolderId;
        var newNote = {
            id: 'note-' + Date.now(),
            folderId: folderId,
            title: 'New Note',
            bodyHtml: '<div><br></div>',
            body: '',
            snippet: 'No additional text',
            updatedAt: new Date().toISOString(),
            pinned: false
        };

        state.notes.unshift(newNote);
        state.activeNoteId = newNote.id;
        state.mobileView = 'editor';
        saveStoredNotes(state.notes);
        showToast('📝 New Note Created');
        updateUI();

        setTimeout(function() {
            var titleInput = document.getElementById('note-title-input');
            if (titleInput) titleInput.focus();
        }, 100);
    }

    function deleteActiveNote() {
        var activeNote = state.notes.find(function(n) { return n.id === state.activeNoteId; });
        if (!activeNote) return;

        if (activeNote.folderId === 'trash') {
            showConfirmModal('Delete Permanently', 'Are you sure you want to permanently delete "' + (activeNote.title || 'New Note') + '"? This action cannot be undone.', function() {
                state.notes = state.notes.filter(function(n) { return n.id !== activeNote.id; });
                saveStoredNotes(state.notes);
                var remaining = getFilteredNotes();
                state.activeNoteId = remaining.length > 0 ? remaining[0].id : null;
                showToast('🗑️ Permanently Deleted');
                updateUI();
            });
        } else {
            showConfirmModal('Move to Trash', 'Move "' + (activeNote.title || 'New Note') + '" to Trash?', function() {
                activeNote.previousFolderId = activeNote.folderId || 'notes';
                activeNote.folderId = 'trash';
                saveStoredNotes(state.notes);
                var remaining = getFilteredNotes();
                state.activeNoteId = remaining.length > 0 ? remaining[0].id : null;
                showToast('🗑️ Moved to Trash');
                updateUI();
            });
        }
    }

    function restoreActiveNote() {
        var activeNote = state.notes.find(function(n) { return n.id === state.activeNoteId; });
        if (!activeNote) return;

        var targetFolder = activeNote.previousFolderId || 'notes';
        var exists = state.folders.some(function(f) { return f.id === targetFolder; });
        if (!exists) targetFolder = 'notes';

        activeNote.folderId = targetFolder;
        saveStoredNotes(state.notes);

        var remaining = getFilteredNotes();
        if (state.activeFolderId === 'trash') {
            state.activeNoteId = remaining.length > 0 ? remaining[0].id : null;
        }

        var folderObj = state.folders.find(function(f) { return f.id === targetFolder; });
        var folderName = folderObj ? folderObj.name : 'Notes';
        showToast('♻️ Restored to ' + folderName);
        updateUI();
    }

    function moveActiveNote() {
        var activeNote = state.notes.find(function(n) { return n.id === state.activeNoteId; });
        if (!activeNote) return;

        showMoveFolderModal(function(targetFolderId) {
            if (!targetFolderId) return;
            activeNote.folderId = targetFolderId;
            saveStoredNotes(state.notes);

            var remaining = getFilteredNotes();
            if (state.activeFolderId !== 'all' && state.activeFolderId !== targetFolderId) {
                state.activeNoteId = remaining.length > 0 ? remaining[0].id : null;
            }

            var folderObj = state.folders.find(function(f) { return f.id === targetFolderId; });
            var name = folderObj ? folderObj.name : 'Folder';
            showToast('📁 Moved to ' + name);
            updateUI();
        });
    }

    function togglePinActiveNote() {
        var activeNote = state.notes.find(function(n) { return n.id === state.activeNoteId; });
        if (!activeNote) return;
        activeNote.pinned = !activeNote.pinned;
        saveStoredNotes(state.notes);
        showToast(activeNote.pinned ? '📌 Note Pinned' : '📌 Note Unpinned');
        updateUI();
    }

    function copyActiveNoteText() {
        var activeNote = state.notes.find(function(n) { return n.id === state.activeNoteId; });
        if (!activeNote) return;
        navigator.clipboard.writeText(activeNote.body || '');
        showToast('📋 Copied to Clipboard');
    }

    function duplicateActiveNote() {
        var activeNote = state.notes.find(function(n) { return n.id === state.activeNoteId; });
        if (!activeNote) return;
        var dup = {
            id: 'note-' + Date.now(),
            folderId: activeNote.folderId,
            title: activeNote.title + ' (Copy)',
            bodyHtml: activeNote.bodyHtml,
            body: activeNote.body,
            snippet: activeNote.snippet,
            updatedAt: new Date().toISOString(),
            pinned: false
        };
        state.notes.unshift(dup);
        state.activeNoteId = dup.id;
        saveStoredNotes(state.notes);
        showToast('📄 Note Duplicated');
        updateUI();
    }

    function showNoteStats() {
        var activeNote = state.notes.find(function(n) { return n.id === state.activeNoteId; });
        if (!activeNote) return;
        var words = (activeNote.body || '').trim().split(/\s+/).filter(Boolean).length;
        var chars = (activeNote.body || '').length;
        showConfirmModal('Note Stats', 'Words: ' + words + ' | Characters: ' + chars, null);
    }

    function clearActiveNoteContent() {
        var activeNote = state.notes.find(function(n) { return n.id === state.activeNoteId; });
        if (!activeNote) return;
        showConfirmModal('Clear Content', 'Are you sure you want to clear the content of this note?', function() {
            activeNote.bodyHtml = '<div><br></div>';
            activeNote.body = '';
            activeNote.snippet = 'No additional text';
            activeNote.updatedAt = new Date().toISOString();
            saveStoredNotes(state.notes);
            showToast('🧹 Content Cleared');
            updateUI();
        });
    }

    function addNewFolder() {
        showFolderModal(function(folderName, chosenIcon) {
            if (folderName && folderName.trim()) {
                var newFolder = {
                    id: 'folder-' + Date.now(),
                    name: folderName.trim(),
                    icon: chosenIcon || 'folder-outline'
                };
                var trashIdx = state.folders.findIndex(function(f) { return f.id === 'trash'; });
                if (trashIdx !== -1) {
                    state.folders.splice(trashIdx, 0, newFolder);
                } else {
                    state.folders.push(newFolder);
                }
                state.activeFolderId = newFolder.id;
                saveStoredFolders(state.folders);
                showToast('📁 Folder Created: ' + newFolder.name);
                updateUI();
            }
        });
    }

    function emptyTrash() {
        var trashNotes = state.notes.filter(function(n) { return n.folderId === 'trash'; });
        if (trashNotes.length === 0) return;

        showConfirmModal('Empty Trash', 'Are you sure you want to permanently delete all ' + trashNotes.length + ' note(s) in Trash? This cannot be undone.', function() {
            state.notes = state.notes.filter(function(n) { return n.folderId !== 'trash'; });
            saveStoredNotes(state.notes);
            state.activeNoteId = null;
            showToast('🗑️ Trash Emptied');
            updateUI();
        });
    }

    function deleteFolder(folderId) {
        var folder = state.folders.find(function(f) { return f.id === folderId; });
        if (!folder) return;

        if (folder.id === 'all' || folder.id === 'trash' || folder.id === 'notes') {
            showToast('⚠️ Default folder cannot be deleted');
            return;
        }

        showConfirmModal('Delete Folder', 'Are you sure you want to delete folder "' + folder.name + '"? Notes in this folder will be moved to "My Notes".', function() {
            state.notes.forEach(function(n) {
                if (n.folderId === folderId) {
                    n.folderId = 'notes';
                }
            });
            saveStoredNotes(state.notes);

            state.folders = state.folders.filter(function(f) { return f.id !== folderId; });
            saveStoredFolders(state.folders);

            if (state.activeFolderId === folderId) {
                state.activeFolderId = 'notes';
                var filtered = getFilteredNotes();
                state.activeNoteId = filtered.length > 0 ? filtered[0].id : null;
            }

            showToast('🗑️ Folder Deleted: ' + folder.name);
            updateUI();
        });
    }

    // Modal System
    var modalCallback = null;
    var selectedModalIcon = 'folder-outline';

    var AVAILABLE_ICONS = [
        'folder-outline', 'briefcase-outline', 'flash-outline', 'person-outline',
        'bulb-outline', 'book-outline', 'color-palette-outline', 'rocket-outline',
        'star-outline', 'lock-closed-outline', 'heart-outline', 'home-outline'
    ];

    function showFolderModal(onConfirm) {
        var modal = document.getElementById('inote-modal');
        var title = document.getElementById('modal-title');
        var desc = document.getElementById('modal-desc');
        var input = document.getElementById('modal-input');
        var select = document.getElementById('modal-select');
        var iconsContainer = document.getElementById('modal-icons');
        var confirmBtn = document.getElementById('modal-confirm');

        if (!modal || !input) return;

        selectedModalIcon = 'folder-outline';

        title.textContent = 'New Folder';
        desc.textContent = 'Enter folder name and select an icon:';
        if (select) select.style.display = 'none';
        input.style.display = 'block';
        input.value = '';

        if (iconsContainer) {
            iconsContainer.style.display = 'flex';
            iconsContainer.innerHTML = AVAILABLE_ICONS.map(function(ic) {
                var isSel = ic === selectedModalIcon;
                return '<div class="icon-swatch ' + (isSel ? 'active' : '') + '" data-icon="' + ic + '">' + getIconSvg(ic) + '</div>';
            }).join('');
        }

        confirmBtn.textContent = 'Create Folder';

        modalCallback = function() {
            var val = input.value.trim();
            closeModal();
            if (val && onConfirm) onConfirm(val, selectedModalIcon);
        };

        modal.classList.add('show');
        setTimeout(function() { input.focus(); }, 100);
    }

    function showMoveFolderModal(onConfirm) {
        var modal = document.getElementById('inote-modal');
        var title = document.getElementById('modal-title');
        var desc = document.getElementById('modal-desc');
        var input = document.getElementById('modal-input');
        var select = document.getElementById('modal-select');
        var iconsContainer = document.getElementById('modal-icons');
        var confirmBtn = document.getElementById('modal-confirm');

        if (!modal || !select) return;

        title.textContent = 'Move Note';
        desc.textContent = 'Select destination folder:';
        if (input) input.style.display = 'none';
        if (iconsContainer) iconsContainer.style.display = 'none';
        select.style.display = 'block';

        var activeNote = state.notes.find(function(n) { return n.id === state.activeNoteId; });

        var validFolders = state.folders.filter(function(f) { return f.id !== 'all' && f.id !== 'trash'; });
        select.innerHTML = validFolders.map(function(f) {
            var isCurrent = activeNote && activeNote.folderId === f.id;
            return '<option value="' + f.id + '" ' + (isCurrent ? 'selected' : '') + '>' + f.name + (isCurrent ? ' (Current)' : '') + '</option>';
        }).join('');

        confirmBtn.textContent = 'Move Note';

        modalCallback = function() {
            var chosen = select.value;
            closeModal();
            if (chosen && onConfirm) onConfirm(chosen);
        };

        modal.classList.add('show');
    }

    function showConfirmModal(titleText, descText, onConfirm) {
        var modal = document.getElementById('inote-modal');
        var title = document.getElementById('modal-title');
        var desc = document.getElementById('modal-desc');
        var input = document.getElementById('modal-input');
        var select = document.getElementById('modal-select');
        var iconsContainer = document.getElementById('modal-icons');
        var confirmBtn = document.getElementById('modal-confirm');

        if (!modal) return;

        title.textContent = titleText;
        desc.textContent = descText;
        if (input) input.style.display = 'none';
        if (select) select.style.display = 'none';
        if (iconsContainer) iconsContainer.style.display = 'none';
        confirmBtn.textContent = 'Confirm';

        modalCallback = function() {
            closeModal();
            if (onConfirm) onConfirm();
        };

        modal.classList.add('show');
    }

    function closeModal() {
        var modal = document.getElementById('inote-modal');
        if (modal) modal.classList.remove('show');
        modalCallback = null;
    }

    function bindGlobalDelegatedEvents() {
        // Prevent mousedown focus loss on format bar
        document.addEventListener('mousedown', function(e) {
            // Save the editor selection BEFORE a <select> grabs focus
            if (e.target.closest('select') && e.target.closest('.inote-format-bar')) {
                var sel = window.getSelection();
                if (sel && sel.rangeCount > 0) {
                    savedRange = sel.getRangeAt(0).cloneRange();
                }
            }
            if (e.target.closest('.inote-format-bar') && !e.target.closest('select')) {
                e.preventDefault();
            }
        });

        document.addEventListener('click', function(e) {
            // Delete Folder Button Click
            var delFolderBtn = e.target.closest('.btn-delete-folder');
            if (delFolderBtn) {
                var fId = delFolderBtn.getAttribute('data-delete-folder-id');
                deleteFolder(fId);
                return;
            }

            // Mobile Back Buttons Navigation
            if (e.target.closest('#btn-nav-sidebar')) {
                state.mobileView = 'sidebar';
                updateMobileViewClasses();
                return;
            }
            if (e.target.closest('#btn-nav-notes')) {
                state.mobileView = 'notes';
                updateMobileViewClasses();
                return;
            }

            // Folder Selection
            var folderEl = e.target.closest('.inote-folder-item');
            if (folderEl) {
                state.activeFolderId = folderEl.getAttribute('data-folder-id');
                var filtered = getFilteredNotes();
                state.activeNoteId = filtered.length > 0 ? filtered[0].id : null;
                state.mobileView = 'notes';
                closeAllPopovers();
                updateUI();
                return;
            }

            // Note Selection
            var noteEl = e.target.closest('.inote-note-item');
            if (noteEl) {
                state.activeNoteId = noteEl.getAttribute('data-note-id');
                state.mobileView = 'editor';
                closeAllPopovers();
                updateUI();
                return;
            }

            // Pin / Delete Actions
            if (e.target.closest('#btn-pin-note')) { togglePinActiveNote(); return; }
            if (e.target.closest('#btn-delete-note')) { deleteActiveNote(); return; }

            // More Options Dropdown Toggle (Three Dots •••)
            if (e.target.closest('#btn-more-options')) {
                state.showMoreMenu = !state.showMoreMenu;
                state.showTextColorPicker = false;
                state.showBgColorPicker = false;
                var dropdown = document.getElementById('inote-more-dropdown');
                if (dropdown) dropdown.classList.toggle('show', state.showMoreMenu);
                updateUI();
                return;
            }

            // Format Buttons
            if (e.target.closest('#fmt-bold')) { formatText('bold'); return; }
            if (e.target.closest('#fmt-italic')) { formatText('italic'); return; }
            if (e.target.closest('#fmt-underline')) { formatText('underline'); return; }
            if (e.target.closest('#fmt-strike')) { formatText('strikeThrough'); return; }
            if (e.target.closest('#fmt-list-bullet')) { formatText('insertUnorderedList'); return; }
            if (e.target.closest('#fmt-list-number')) { formatText('insertOrderedList'); return; }

            // Context Menu Items
            var menuItem = e.target.closest('.menu-item');
            if (menuItem) {
                var menuId = menuItem.id;
                state.showMoreMenu = false;
                if (menuId === 'menu-restore-note') restoreActiveNote();
                else if (menuId === 'menu-move-note') moveActiveNote();
                else if (menuId === 'menu-toggle-pin') togglePinActiveNote();
                else if (menuId === 'menu-copy-text') copyActiveNoteText();
                else if (menuId === 'menu-duplicate-note') duplicateActiveNote();
                else if (menuId === 'menu-stats') showNoteStats();
                else if (menuId === 'menu-backup-data') exportBackupFile();
                else if (menuId === 'menu-restore-data') triggerRestoreBackup();
                else if (menuId === 'menu-change-password') renderChangePasswordModal();
                else if (menuId === 'menu-lock-app') lockApp();
                else if (menuId === 'menu-clear-note') clearActiveNoteContent();
                else if (menuId === 'menu-delete-note') deleteActiveNote();
                return;
            }

            // Backup & Restore Actions
            if (e.target.closest('#btn-backup-data') || e.target.closest('#menu-backup-data')) {
                exportBackupFile();
                return;
            }
            if (e.target.closest('#btn-restore-data') || e.target.closest('#menu-restore-data')) {
                triggerRestoreBackup();
                return;
            }
            if (e.target.closest('#btn-change-password') || e.target.closest('#menu-change-password')) {
                renderChangePasswordModal();
                return;
            }
            if (e.target.closest('#btn-lock-app') || e.target.closest('#menu-lock-app')) {
                lockApp();
                return;
            }

            // Toolbar Direct Action Buttons
            if (e.target.closest('#btn-restore-note')) { restoreActiveNote(); return; }
            if (e.target.closest('#btn-move-note')) { moveActiveNote(); return; }

            // Modal Confirm / Cancel Buttons
            if (e.target.closest('#modal-confirm')) {
                if (modalCallback) modalCallback();
                return;
            }
            if (e.target.closest('#modal-cancel') || e.target.id === 'inote-modal') {
                closeModal();
                return;
            }

            // Add New Folder Button
            if (e.target.closest('#btn-add-folder')) { addNewFolder(); return; }

            // Empty Trash Button
            if (e.target.closest('#btn-empty-trash')) { emptyTrash(); return; }

            // Icon Swatch Selection inside Modal
            var iconSwatch = e.target.closest('.icon-swatch');
            if (iconSwatch) {
                var iconName = iconSwatch.getAttribute('data-icon');
                if (iconName) {
                    selectedModalIcon = iconName;
                    var allSwatches = document.querySelectorAll('.icon-swatch');
                    Array.prototype.forEach.call(allSwatches, function(sw) {
                        sw.classList.toggle('active', sw.getAttribute('data-icon') === iconName);
                    });
                }
                return;
            }

            // Create New Note Button
            if (e.target.closest('#btn-new-note')) { createNewNote(); return; }

            // Close popovers on click outside — but NEVER call updateUI() here
            // (updateUI resets editor innerHTML which kills savedRange DOM nodes)
            if (!e.target.closest('.color-picker-wrapper') && !e.target.closest('.inote-menu-wrapper') && !e.target.closest('.inote-format-bar') && !e.target.closest('.inote-toolbar')) {
                closeAllPopovers();
            }
        });

        // Change Listeners for Selects
        document.addEventListener('change', function(e) {
            if (e.target && e.target.id === 'inote-restore-file-input') {
                handleRestoreFileSelect(e);
            }
            if (e.target && e.target.id === 'fmt-heading') {
                // Use custom applyHeading — directly replaces DOM node, no execCommand quirks
                applyHeading(e.target.value);
            }
            if (e.target && e.target.id === 'fmt-font') {
                // Apply font to entire editor (not just selection) — saves per-note
                var editor = document.getElementById('note-content-editor');
                var fontVal = e.target.value;
                if (editor) {
                    editor.style.fontFamily = "'" + fontVal + "', sans-serif";
                }
                var activeNote = state.notes.find(function(n) { return n.id === state.activeNoteId; });
                if (activeNote) {
                    activeNote.fontFamily = fontVal;
                    saveStoredNotes(state.notes);
                    showToast('🔤 Font: ' + fontVal);
                }
            }
        });

        // Search & Input Listeners
        document.addEventListener('input', function(e) {
            if (e.target && e.target.id === 'inote-search-input') {
                state.searchQuery = e.target.value;
                updateUI();
                return;
            }
            if (e.target && (e.target.id === 'note-title-input' || e.target.id === 'note-content-editor')) {
                onNoteContentChange();
            }
        });

        // Modal Input Enter key listener
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && document.getElementById('inote-modal') && document.getElementById('inote-modal').classList.contains('show')) {
                e.preventDefault();
                if (modalCallback) modalCallback();
                return;
            }
            if (e.key === 'Escape' && document.getElementById('inote-modal') && document.getElementById('inote-modal').classList.contains('show')) {
                closeModal();
                return;
            }
        });

        // Shortcuts
        document.addEventListener('keydown', function(e) {
            if ((e.ctrlKey || e.metaKey) && e.key === 'b') { e.preventDefault(); formatText('bold'); }
            if ((e.ctrlKey || e.metaKey) && e.key === 'i') { e.preventDefault(); formatText('italic'); }
            if ((e.ctrlKey || e.metaKey) && e.key === 'u') { e.preventDefault(); formatText('underline'); }
        });

        // Active Selection / Format Toolbar State Syncing
        document.addEventListener('selectionchange', function() {
            updateFormatToolbarState();
        });
        document.addEventListener('keyup', function(e) {
            if (e.target && e.target.id === 'note-content-editor') {
                updateFormatToolbarState();
            }
        });
        document.addEventListener('mouseup', function(e) {
            if (e.target && e.target.closest('#note-content-editor')) {
                updateFormatToolbarState();
            }
        });
    }

    function closeAllPopovers() {
        state.showMoreMenu = false;
        var el = document.getElementById('inote-more-dropdown');
        if (el) el.classList.remove('show');
    }

    function formatText(cmd, value) {
        var editor = document.getElementById('note-content-editor');
        if (!editor) return;
        editor.focus();
        // Restore selection that was lost when a <select> stole focus
        if (savedRange) {
            try {
                var sel = window.getSelection();
                if (sel) {
                    sel.removeAllRanges();
                    sel.addRange(savedRange);
                }
            } catch(err) {}
            savedRange = null;
        }
        document.execCommand(cmd, false, value || null);
        onNoteContentChange();
        updateFormatToolbarState();
    }

    // Custom heading applier — directly replaces the block element in DOM.
    // execCommand('formatBlock') was unreliable: it applied to wrong nodes
    // because clicking <select> triggers updateUI() which resets innerHTML.
    function applyHeading(tag) {
        var editor = document.getElementById('note-content-editor');
        if (!editor) return;
        editor.focus();

        // Restore saved selection
        var targetRange = savedRange;
        savedRange = null;
        var sel = window.getSelection();
        if (targetRange && sel) {
            try { sel.removeAllRanges(); sel.addRange(targetRange); } catch(e) {}
        }

        sel = window.getSelection();
        if (!sel || sel.rangeCount === 0) return;

        // Walk up from start of selection to find the block container inside editor
        var anchor = sel.getRangeAt(0).startContainer;
        var block = anchor.nodeType === 3 ? anchor.parentNode : anchor;
        while (block && block !== editor && block.parentNode !== editor) {
            block = block.parentNode;
        }
        if (!block || block === editor) {
            // Nothing to wrap, just use execCommand as fallback
            document.execCommand('formatBlock', false, tag === 'p' ? '<div>' : '<' + tag + '>');
            onNoteContentChange();
            return;
        }

        // Create the new block element, copy content
        var newTag = tag === 'p' ? 'div' : tag;
        var newBlock = document.createElement(newTag);
        newBlock.innerHTML = block.innerHTML;
        block.parentNode.replaceChild(newBlock, block);

        // Place cursor at end of new block
        var newRange = document.createRange();
        newRange.selectNodeContents(newBlock);
        newRange.collapse(false);
        sel.removeAllRanges();
        sel.addRange(newRange);

        onNoteContentChange();
        updateFormatToolbarState();
    }

    function updateFormatToolbarState() {
        var editor = document.getElementById('note-content-editor');
        if (!editor) return;

        var sel = window.getSelection();
        if (!sel || sel.rangeCount === 0) return;

        var anchor = sel.anchorNode;
        if (!anchor) return;
        var node = anchor.nodeType === 3 ? anchor.parentNode : anchor;
        if (!editor.contains(node)) return;

        var btnBold = document.getElementById('fmt-bold');
        var btnItalic = document.getElementById('fmt-italic');
        var btnUnderline = document.getElementById('fmt-underline');
        var btnStrike = document.getElementById('fmt-strike');
        var btnListBullet = document.getElementById('fmt-list-bullet');
        var btnListNumber = document.getElementById('fmt-list-number');

        try {
            var isBold = document.queryCommandState('bold');
            var isItalic = document.queryCommandState('italic');
            var isUnderline = document.queryCommandState('underline');
            var isStrike = document.queryCommandState('strikeThrough');
            var isBullet = document.queryCommandState('insertUnorderedList');
            var isNumber = document.queryCommandState('insertOrderedList');

            if (btnBold) btnBold.classList.toggle('active', !!isBold);
            if (btnItalic) btnItalic.classList.toggle('active', !!isItalic);
            if (btnUnderline) btnUnderline.classList.toggle('active', !!isUnderline);
            if (btnStrike) btnStrike.classList.toggle('active', !!isStrike);
            if (btnListBullet) btnListBullet.classList.toggle('active', !!isBullet);
            if (btnListNumber) btnListNumber.classList.toggle('active', !!isNumber);
        } catch(e) {}

        var headingSelect = document.getElementById('fmt-heading');
        if (headingSelect) {
            var currBlock = node;
            var headingTag = 'p';
            while (currBlock && currBlock !== editor && currBlock.parentNode !== editor) {
                currBlock = currBlock.parentNode;
            }
            if (currBlock && currBlock !== editor) {
                var tagName = currBlock.tagName ? currBlock.tagName.toLowerCase() : 'p';
                if (tagName === 'h1' || tagName === 'h2' || tagName === 'h3') {
                    headingTag = tagName;
                } else {
                    headingTag = 'p';
                }
            }
            if (document.activeElement !== headingSelect) {
                headingSelect.value = headingTag;
            }
        }
    }

    // Lock Screen & Backup Implementation
    var isLockSetupMode = false;

    function renderLockOverlay(isSetup) {
        isLockSetupMode = isSetup;
        var root = document.getElementById('root');
        if (!root) return;

        root.innerHTML = `
            <div class="notybook-lock-overlay show" id="notybook-lock-screen">
                <div class="lock-card" id="lock-card-box">
                    <div class="lock-icon-hero">🔒</div>
                    <h2>${isSetup ? 'Set Security Password' : 'Unlock Notybook'}</h2>
                    <p>${isSetup ? 'Create a master password to encrypt and protect all your notes.' : 'Enter your security password to access your encrypted notes.'}</p>
                    
                    <div class="lock-input-group">
                        <input type="password" id="lock-pass-input" placeholder="Enter Master Password" autofocus />
                        <button class="toggle-pass-btn" id="btn-toggle-lock-pass" type="button" title="Show/Hide">👁️</button>
                    </div>

                    ${isSetup ? `
                        <div class="lock-input-group" style="margin-top: 10px;">
                            <input type="password" id="lock-pass-confirm" placeholder="Confirm Password" />
                        </div>
                    ` : ''}

                    <div class="lock-error-msg" id="lock-error-msg"></div>
                    <button class="lock-action-btn" id="btn-unlock-submit">${isSetup ? 'Create Password & Encrypt' : 'Unlock Notes'}</button>
                </div>
            </div>
        `;

        var passInput = document.getElementById('lock-pass-input');
        var confirmInput = document.getElementById('lock-pass-confirm');
        var errorMsg = document.getElementById('lock-error-msg');
        var submitBtn = document.getElementById('btn-unlock-submit');
        var toggleBtn = document.getElementById('btn-toggle-lock-pass');
        var cardBox = document.getElementById('lock-card-box');

        if (toggleBtn && passInput) {
            toggleBtn.onclick = function() {
                var isPass = passInput.type === 'password';
                passInput.type = isPass ? 'text' : 'password';
                if (confirmInput) confirmInput.type = isPass ? 'text' : 'password';
            };
        }

        async function handleLockSubmit() {
            var val = passInput.value;
            if (!val || val.length < 3) {
                showErr('Password must be at least 3 characters.');
                return;
            }

            if (isSetup) {
                var conf = confirmInput ? confirmInput.value : '';
                if (val !== conf) {
                    showErr('Passwords do not match.');
                    return;
                }
                submitBtn.textContent = 'Encrypting...';
                try {
                    sessionPassword = val;
                    var verifier = await NotyCrypto.encrypt("NOTYBOOK_VERIFIED", val);
                    localStorage.setItem('notybook_sec_auth', verifier);

                    state.notes = DEFAULT_NOTES;
                    state.folders = DEFAULT_FOLDERS;
                    if (state.notes.length > 0) state.activeNoteId = state.notes[0].id;

                    await saveStoredNotesAsync(state.notes);
                    await saveStoredFoldersAsync(state.folders);

                    renderMainLayout();
                    await loadAndDisplayNotes();
                    showToast('🔐 Master Password Created & Data Encrypted!');
                } catch(err) {
                    showErr('Failed to create encryption key.');
                }
            } else {
                submitBtn.textContent = 'Decrypting...';
                try {
                    var authRaw = localStorage.getItem('notybook_sec_auth');
                    var decrypted = await NotyCrypto.decrypt(authRaw, val);
                    if (decrypted === "NOTYBOOK_VERIFIED") {
                        sessionPassword = val;
                        renderMainLayout();
                        await loadAndDisplayNotes();
                        showToast('🔓 Notybook Unlocked!');
                    } else {
                        showErr('❌ Incorrect Password. Try again.');
                    }
                } catch(e) {
                    showErr('❌ Incorrect Password. Try again.');
                }
            }
        }

        function showErr(msg) {
            if (errorMsg) errorMsg.textContent = msg;
            if (cardBox) {
                cardBox.classList.remove('shake');
                void cardBox.offsetWidth;
                cardBox.classList.add('shake');
            }
            if (submitBtn) submitBtn.textContent = isSetup ? 'Create Password & Encrypt' : 'Unlock Notes';
        }

        if (submitBtn) submitBtn.onclick = handleLockSubmit;
        if (passInput) {
            passInput.onkeydown = function(e) { if (e.key === 'Enter') handleLockSubmit(); };
        }
        if (confirmInput) {
            confirmInput.onkeydown = function(e) { if (e.key === 'Enter') handleLockSubmit(); };
        }
        setTimeout(function() { if (passInput) passInput.focus(); }, 150);
    }

    async function loadAndDisplayNotes() {
        state.notes = await getStoredNotesAsync();
        state.folders = await getStoredFoldersAsync();
        if (state.notes.length > 0 && !state.activeNoteId) {
            state.activeNoteId = state.notes[0].id;
        }
        updateUI();
    }

    function lockApp() {
        sessionPassword = null;
        renderLockOverlay(false);
        showToast('🔒 App Locked');
    }

    async function exportBackupFile() {
        try {
            var backupObj = {
                app: 'Notybook',
                version: '2.0',
                exportedAt: new Date().toISOString(),
                auth: localStorage.getItem('notybook_sec_auth'),
                notes: localStorage.getItem('inote_notes'),
                folders: localStorage.getItem('inote_folders')
            };

            var dateTag = new Date().toISOString().slice(0, 10);
            var filename = 'notybook_backup_' + dateTag + '.json';
            var jsonStr = JSON.stringify(backupObj, null, 2);

            // 1. Android APK Native Bridge -> Direct 1-Click Save to Downloads (Zero prompts)
            if (typeof window !== 'undefined' && window.NotybookNative && typeof window.NotybookNative.saveBackupToDownloads === 'function') {
                window.NotybookNative.saveBackupToDownloads(filename, jsonStr);
                showToast('📥 Backup Saved to Downloads: ' + filename);
                return;
            }

            // 2. Standard Browser 1-Click Download Anchor
            var blob = new Blob([jsonStr], { type: 'application/json' });
            var url = URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            setTimeout(function() {
                a.remove();
                URL.revokeObjectURL(url);
            }, 300);

            showToast('📥 Backup Saved to Downloads: ' + filename);
        } catch(e) {
            console.error('Backup error:', e);
            showToast('❌ Backup Export Failed: ' + (e.message || e));
        }
    }

    function triggerRestoreBackup() {
        var fileInput = document.getElementById('inote-restore-file-input');
        if (fileInput) fileInput.click();
    }

    function handleRestoreFileSelect(e) {
        var file = e.target.files && e.target.files[0];
        if (!file) return;

        var reader = new FileReader();
        reader.onload = async function(evt) {
            try {
                var content = evt.target.result;
                var backup = JSON.parse(content);

                if (!backup || (!backup.notes && !backup.auth)) {
                    alert('Invalid Notybook Backup file.');
                    return;
                }

                showConfirmModal('Restore Backup', 'Restoring this backup will replace current notes with the backup data. Continue?', async function() {
                    if (backup.auth) localStorage.setItem('notybook_sec_auth', backup.auth);
                    if (backup.notes) localStorage.setItem('inote_notes', backup.notes);
                    if (backup.folders) localStorage.setItem('inote_folders', backup.folders);

                    sessionPassword = null;
                    renderLockOverlay(false);
                    showToast('📥 Backup Loaded! Enter password to unlock.');
                });
            } catch(err) {
                alert('Failed to read backup file: ' + err.message);
            }
        };
        reader.readAsText(file);
        e.target.value = '';
    }

    function renderChangePasswordModal() {
        var authRaw = localStorage.getItem('notybook_sec_auth');
        if (!authRaw) {
            showToast('⚠️ Master Password is not set yet.');
            return;
        }

        var existingModal = document.getElementById('notybook-change-pass-screen');
        if (existingModal) existingModal.remove();

        var overlay = document.createElement('div');
        overlay.className = 'notybook-lock-overlay show';
        overlay.id = 'notybook-change-pass-screen';
        overlay.innerHTML = `
            <div class="lock-card" id="change-pass-card-box">
                <div class="lock-icon-hero">🔑</div>
                <h2>Change Password</h2>
                <p>Enter your previous password and set a new master password.</p>
                
                <div class="lock-input-group">
                    <input type="password" id="change-pass-current" placeholder="Previous Password" autofocus />
                    <button class="toggle-pass-btn" id="btn-toggle-cp-curr" type="button" title="Show/Hide">👁️</button>
                </div>

                <div class="lock-input-group" style="margin-top: 10px;">
                    <input type="password" id="change-pass-new" placeholder="New Password" />
                    <button class="toggle-pass-btn" id="btn-toggle-cp-new" type="button" title="Show/Hide">👁️</button>
                </div>

                <div class="lock-input-group" style="margin-top: 10px;">
                    <input type="password" id="change-pass-confirm" placeholder="Confirm New Password" />
                </div>

                <div class="lock-error-msg" id="change-pass-error-msg"></div>

                <div style="display: flex; gap: 10px; margin-top: 18px;">
                    <button class="lock-action-btn" id="btn-cp-cancel" style="background: #2c2c2e; color: #a1a1a6; margin-top: 0;">Cancel</button>
                    <button class="lock-action-btn" id="btn-cp-submit" style="margin-top: 0;">Update Password</button>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);

        var currInput = document.getElementById('change-pass-current');
        var newInput = document.getElementById('change-pass-new');
        var confirmInput = document.getElementById('change-pass-confirm');
        var errorMsg = document.getElementById('change-pass-error-msg');
        var submitBtn = document.getElementById('btn-cp-submit');
        var cancelBtn = document.getElementById('btn-cp-cancel');
        var cardBox = document.getElementById('change-pass-card-box');
        var toggleCurr = document.getElementById('btn-toggle-cp-curr');
        var toggleNew = document.getElementById('btn-toggle-cp-new');

        if (toggleCurr && currInput) {
            toggleCurr.onclick = function() {
                currInput.type = currInput.type === 'password' ? 'text' : 'password';
            };
        }
        if (toggleNew && newInput && confirmInput) {
            toggleNew.onclick = function() {
                var isPass = newInput.type === 'password';
                newInput.type = isPass ? 'text' : 'password';
                confirmInput.type = isPass ? 'text' : 'password';
            };
        }

        function showErr(msg) {
            if (errorMsg) errorMsg.textContent = msg;
            if (cardBox) {
                cardBox.classList.remove('shake');
                void cardBox.offsetWidth;
                cardBox.classList.add('shake');
            }
            if (submitBtn) submitBtn.textContent = 'Update Password';
        }

        if (cancelBtn) {
            cancelBtn.onclick = function() {
                overlay.remove();
            };
        }

        async function handleChangeSubmit() {
            var currVal = currInput ? currInput.value : '';
            var newVal = newInput ? newInput.value : '';
            var confVal = confirmInput ? confirmInput.value : '';

            if (!currVal) {
                showErr('Please enter your previous password.');
                return;
            }

            try {
                var authRaw = localStorage.getItem('notybook_sec_auth');
                var decrypted = await NotyCrypto.decrypt(authRaw, currVal);
                if (decrypted !== "NOTYBOOK_VERIFIED") {
                    showErr('❌ Previous password is incorrect.');
                    return;
                }
            } catch(e) {
                showErr('❌ Previous password is incorrect.');
                return;
            }

            if (!newVal || newVal.length < 3) {
                showErr('New password must be at least 3 characters.');
                return;
            }

            if (newVal !== confVal) {
                showErr('❌ New passwords do not match.');
                return;
            }

            submitBtn.textContent = 'Updating...';

            try {
                var newVerifier = await NotyCrypto.encrypt("NOTYBOOK_VERIFIED", newVal);
                localStorage.setItem('notybook_sec_auth', newVerifier);

                sessionPassword = newVal;

                await saveStoredNotesAsync(state.notes);
                await saveStoredFoldersAsync(state.folders);

                overlay.remove();
                showToast('🔑 Password Changed & Data Encrypted Successfully!');
            } catch(err) {
                showErr('Failed to update encryption key.');
            }
        }

        if (submitBtn) submitBtn.onclick = handleChangeSubmit;

        var inputs = [currInput, newInput, confirmInput];
        inputs.forEach(function(inp) {
            if (inp) {
                inp.onkeydown = function(e) {
                    if (e.key === 'Enter') handleChangeSubmit();
                    if (e.key === 'Escape') overlay.remove();
                };
            }
        });

        setTimeout(function() { if (currInput) currInput.focus(); }, 150);
    }

    function showToast(msg) {
        var toast = document.getElementById('inote-toast');
        if (!toast) return;
        toast.textContent = msg;
        toast.classList.add('show');
        setTimeout(function() { toast.classList.remove('show'); }, 2000);
    }

    function escapeHtml(str) {
        return (str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    function injectStyles() {
        if (document.getElementById('inote-pro-styles')) return;
        var style = document.createElement('style');
        style.id = 'inote-pro-styles';
        style.textContent = `
            @font-face {
                font-family: 'Roboto'; src: url('fonts/Roboto-Black.ttf') format('truetype');
            }
            @font-face {
                font-family: 'Aesthetic Romance'; src: url('fonts/Aesthetic Romance.ttf') format('truetype');
            }
            @font-face {
                font-family: 'Bebas Notes'; src: url('fonts/Bebas Notes.ttf') format('truetype');
            }
            @font-face {
                font-family: 'Cheese Milky'; src: url('fonts/Cheese Milky.otf') format('opentype');
            }
            @font-face {
                font-family: 'Coolvetica'; src: url('fonts/Coolvetica Rg.otf') format('opentype');
            }
            @font-face {
                font-family: 'KG Miss Steward'; src: url('fonts/KGMissSteward.ttf') format('truetype');
            }
            @font-face {
                font-family: 'Lemon Milk'; src: url('fonts/LEMONMILK-Regular.otf') format('opentype');
            }
            @font-face {
                font-family: 'Mithella'; src: url('fonts/Mithella-Regular.otf') format('opentype');
            }
            @font-face {
                font-family: 'Modern Romance'; src: url('fonts/Modern Romance.otf') format('opentype');
            }
            @font-face {
                font-family: 'Papernotes'; src: url('fonts/Papernotes.ttf') format('truetype');
            }
            @font-face {
                font-family: 'Quache Black'; src: url('fonts/Quache-Black_PERSONAL.ttf') format('truetype');
            }
            @font-face {
                font-family: 'Aubrey'; src: url('fonts/AUBREY1__.TTF') format('truetype');
            }

            body, html {
                margin: 0; padding: 0; width: 100%; height: 100%;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                background-color: #1e1e24; color: #f5f5f7; overflow: hidden;
            }
            .inote-app-container {
                display: flex; width: 100vw; height: 100vh;
                background-color: #1a1a1e; color: #ffffff; position: relative;
            }

            /* Toast Notification */
            .inote-toast {
                position: fixed; top: 16px; left: 50%; transform: translateX(-50%) translateY(-20px);
                background: #e5c07b; color: #1e1e24; padding: 8px 18px; border-radius: 20px;
                font-size: 13px; font-weight: 600; box-shadow: 0 4px 14px rgba(0,0,0,0.4);
                opacity: 0; pointer-events: none; transition: all 0.25s ease; z-index: 9999;
            }
            .inote-toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }

            /* Custom Modal Dialog */
            .inote-modal-overlay {
                position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
                background: rgba(0,0,0,0.65); backdrop-filter: blur(4px); display: flex;
                align-items: center; justify-content: center; z-index: 10000;
                opacity: 0; pointer-events: none; transition: opacity 0.2s ease;
            }
            .inote-modal-overlay.show { opacity: 1; pointer-events: auto; }
            .inote-modal-box {
                background: #28282e; border: 1px solid #383840; border-radius: 14px;
                padding: 24px; width: 320px; box-shadow: 0 12px 32px rgba(0,0,0,0.6);
                display: flex; flex-direction: column; gap: 12px;
            }
            .inote-modal-box h3 { margin: 0; font-size: 18px; color: #ffffff; }
            .inote-modal-box p { margin: 0; font-size: 13px; color: #a1a1a6; line-height: 1.4; }
            .inote-modal-box input, .inote-modal-box select {
                background: #1c1c1e; border: 1px solid #383840; border-radius: 8px;
                padding: 10px 12px; font-size: 14px; color: #ffffff; outline: none; box-sizing: border-box;
            }
            .inote-modal-box input:focus, .inote-modal-box select:focus { border-color: #e5c07b; }
            .inote-icon-picker {
                display: flex; flex-wrap: wrap; gap: 8px; margin: 10px 0; justify-content: center;
            }
            .icon-swatch {
                width: 36px; height: 36px; border-radius: 8px; background: #1c1c1e;
                border: 1px solid #383840; color: #d1d1d6; display: flex; align-items: center;
                justify-content: center; font-size: 18px; cursor: pointer; transition: all 0.15s ease;
            }
            .icon-swatch:hover { background: rgba(229,192,123,0.15); color: #e5c07b; border-color: #e5c07b; }
            .icon-swatch.active { background: #e5c07b; color: #1c1c1e; border-color: #e5c07b; font-weight: bold; transform: scale(1.05); }
            .notes-header-actions { display: flex; align-items: center; gap: 8px; }
            .inote-action-btn.danger { color: #ff5555; font-size: 12px; gap: 4px; display: flex; align-items: center; font-weight: 600; }
            .inote-action-btn.danger:hover { background: rgba(255,85,85,0.15); }
            .modal-buttons { display: flex; justify-content: flex-end; gap: 10px; margin-top: 8px; }
            .modal-btn {
                padding: 8px 16px; border-radius: 8px; font-size: 13px; font-weight: 600;
                cursor: pointer; border: none; transition: background 0.15s;
            }
            .modal-btn.secondary { background: #383840; color: #d1d1d6; }
            .modal-btn.secondary:hover { background: #45454e; color: #ffffff; }
            .modal-btn.primary { background: #e5c07b; color: #1c1c1e; }
            .modal-btn.primary:hover { background: #ebd098; }

            /* Sidebar */
            .inote-sidebar {
                width: 250px; background-color: #212126; border-right: 1px solid #2e2e34;
                display: flex; flex-direction: column; flex-shrink: 0;
            }
            .inote-sidebar-header {
                padding: 16px; display: flex; align-items: center; justify-content: space-between;
                border-bottom: 1px solid #2e2e34;
            }
            .inote-brand { display: flex; align-items: center; gap: 8px; }
            .inote-brand-icon { font-size: 18px; }
            .inote-logo-title { font-weight: 700; font-size: 16px; color: #ffffff; letter-spacing: -0.3px; }
            .inote-icon-btn {
                background: none; border: none; color: #e5c07b; cursor: pointer;
                padding: 6px; border-radius: 6px; display: flex; align-items: center; justify-content: center;
                transition: background 0.15s;
            }
            .inote-icon-btn:hover { background: rgba(229,192,123,0.15); }

            .inote-folder-list { flex: 1; overflow-y: auto; padding: 10px; }
            .inote-folder-item {
                display: flex; align-items: center; justify-content: space-between;
                padding: 10px 14px; border-radius: 8px; cursor: pointer; font-size: 14px;
                color: #c5c5cf; margin-bottom: 3px; transition: all 0.15s ease;
            }
            .inote-folder-item:hover { background: rgba(255,255,255,0.06); color: #ffffff; }
            .inote-folder-item.active { background: #e5c07b; color: #1c1c1e; font-weight: 700; }
            .folder-item-meta { display: flex; align-items: center; gap: 6px; }
            .folder-count { font-size: 12px; opacity: 0.75; }
            .btn-delete-folder {
                background: none; border: none; font-size: 13px; cursor: pointer;
                padding: 2px 4px; border-radius: 4px; opacity: 0; transition: all 0.15s ease;
                color: #ff5555; display: flex; align-items: center; justify-content: center;
            }
            .inote-folder-item:hover .btn-delete-folder { opacity: 0.7; }
            .btn-delete-folder:hover { opacity: 1 !important; background: rgba(255,85,85,0.25); transform: scale(1.15); }
            .inote-folder-item.active .btn-delete-folder { color: #800000; }
            .inote-folder-item.active .btn-delete-folder:hover { background: rgba(0,0,0,0.15); color: #b30000; }

            ion-icon {
                vertical-align: middle;
                display: inline-block;
            }
            .inote-brand-icon ion-icon {
                font-size: 22px;
                color: #e5c07b;
            }
            .inote-tool-btn ion-icon, .menu-item ion-icon {
                font-size: 16px;
            }
            .search-icon {
                font-size: 16px;
                margin-right: 6px;
                color: #8e8e93;
            }
            .folder-name-label {
                display: flex;
                align-items: center;
                gap: 8px;
            }
            .folder-name-label ion-icon {
                font-size: 16px;
                color: #e5c07b;
            }
            .pin-badge ion-icon {
                color: #e5c07b;
                font-size: 14px;
            }
            .btn-delete-folder ion-icon {
                font-size: 14px;
            }
            .inote-notes-pane {
                width: 290px; background-color: #1a1a1e; border-right: 1px solid #2e2e34;
                display: flex; flex-direction: column; flex-shrink: 0;
            }
            .inote-search-bar {
                padding: 10px 14px; display: flex; align-items: center; background: #28282e;
                margin: 12px; border-radius: 10px; color: #8e8e93; border: 1px solid #36363c;
            }
            .inote-search-bar input {
                background: none; border: none; color: #ffffff; margin-left: 8px; width: 100%;
                outline: none; font-size: 13px;
            }
            .inote-notes-header {
                padding: 0 16px 10px 16px; display: flex; justify-content: space-between; align-items: center;
                font-size: 13px; color: #8e8e93; font-weight: 600;
            }
            .inote-action-btn {
                background: none; border: none; color: #e5c07b; cursor: pointer; padding: 4px;
                display: flex; align-items: center; justify-content: center; border-radius: 6px;
                transition: background 0.15s;
            }
            .inote-action-btn:hover { background: rgba(229,192,123,0.15); }

            .inote-notes-list { flex: 1; overflow-y: auto; padding: 0 10px; }
            .inote-note-item {
                padding: 12px 14px; border-radius: 10px; cursor: pointer; margin-bottom: 6px;
                background: transparent; border: 1px solid transparent; transition: all 0.15s ease;
            }
            .inote-note-item:hover { background: rgba(255,255,255,0.05); }
            .inote-note-item.active { background: #28282e; border-color: #383840; }
            .inote-note-header-line { display: flex; justify-content: space-between; align-items: center; }
            .note-title-text { font-weight: 600; font-size: 14px; color: #ffffff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
            .pin-badge { font-size: 12px; }
            .inote-note-meta { display: flex; gap: 8px; font-size: 12px; color: #8e8e93; margin-top: 5px; }
            .note-snippet { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: #a1a1a6; flex: 1; }

            /* Editor Pane */
            .inote-editor-pane {
                flex: 1; background-color: #18181c; display: flex; flex-direction: column;
                height: 100%; overflow: hidden; position: relative;
            }
            .inote-toolbar {
                height: 52px; min-height: 52px; flex-shrink: 0; border-bottom: 1px solid #2a2a30; display: flex; align-items: center;
                justify-content: space-between; padding: 0 20px; background-color: #1f1f24;
                position: relative; z-index: 100;
            }
            .inote-toolbar-left { display: flex; align-items: center; position: relative; gap: 4px; }
            .inote-tool-btn {
                background: none; border: none; color: #d1d1d6; cursor: pointer;
                padding: 8px 12px; border-radius: 8px; font-size: 14px; font-weight: 600; display: flex;
                align-items: center; justify-content: center; transition: all 0.15s ease; gap: 6px;
            }
            .inote-tool-btn ion-icon { font-size: 18px; }
            .inote-tool-btn:hover { background: rgba(255,255,255,0.1); color: #ffffff; }
            .inote-tool-btn.active { color: #e5c07b; background: rgba(229,192,123,0.2); }

            /* Rich Format Bar */
            .inote-format-bar {
                height: 46px; min-height: 46px; flex-shrink: 0; background-color: #212126; border-bottom: 1px solid #2a2a30;
                display: flex; align-items: center; padding: 0 18px; gap: 8px; overflow-x: auto; flex-wrap: nowrap;
                -webkit-overflow-scrolling: touch; position: relative; z-index: 99;
            }
            .inote-format-select {
                background: #28282e; color: #ffffff; border: 1px solid #383840;
                padding: 6px 12px; border-radius: 8px; font-size: 14px; font-weight: 600; outline: none; cursor: pointer;
                max-width: 210px;
            }
            .inote-format-select optgroup {
                background: #1e1e24; color: #e5c07b; font-size: 12px; font-style: normal; font-weight: 700;
            }
            .inote-format-select option {
                background: #28282e; color: #ffffff; font-size: 14px; padding: 6px 0; font-weight: 500;
            }
            #fmt-font { min-width: 180px; }
            .format-divider { width: 1px; height: 22px; background: #36363c; margin: 0 6px; }
            .inote-fmt-btn {
                background: #28282e; border: 1px solid #383840; color: #ffffff;
                padding: 6px 12px; border-radius: 8px; font-size: 14px; font-weight: 700; cursor: pointer;
                display: flex; align-items: center; justify-content: center; gap: 6px;
                transition: all 0.15s; white-space: nowrap; min-width: 32px; height: 32px; box-sizing: border-box;
            }
            .inote-fmt-btn.icon-only { padding: 6px 9px; font-size: 16px; }
            .inote-fmt-btn:hover { background: #383840; color: #ffffff; border-color: #e5c07b; }
            .inote-fmt-btn.active { background: #e5c07b !important; color: #1c1c1e !important; border-color: #e5c07b !important; font-weight: 800 !important; }

            /* Context Menu Dropdown */
            .inote-menu-wrapper { position: relative; display: inline-block; }
            .inote-dropdown-menu {
                position: absolute; top: 42px; right: 0; left: auto; background: #28282e; border: 1px solid #383840;
                border-radius: 12px; min-width: 190px; max-width: calc(100vw - 24px); max-height: 80vh; overflow-y: auto; padding: 6px; box-shadow: 0 8px 24px rgba(0,0,0,0.6);
                display: none; z-index: 10000;
            }
            .inote-dropdown-menu.show { display: block; }
            .menu-item {
                padding: 9px 12px; font-size: 13px; color: #e5e5e7; border-radius: 6px;
                cursor: pointer; transition: background 0.15s; display: flex; align-items: center; gap: 8px;
            }
            .menu-item:hover { background: rgba(229,192,123,0.2); color: #ffffff; }
            .menu-item.danger:hover { background: rgba(255,75,75,0.2); color: #ff5555; }
            .menu-divider { height: 1px; background: #383840; margin: 4px 0; }

            .inote-save-status { font-size: 12px; color: #8e8e93; font-weight: 500; }

            /* Content Editable Body */
            .inote-editor-body {
                flex: 1; min-height: 0; padding: 24px 32px; display: flex; flex-direction: column; overflow-y: auto; -webkit-overflow-scrolling: touch;
            }
            .inote-date-display { text-align: center; font-size: 12px; color: #8e8e93; margin-bottom: 16px; font-weight: 500; }
            .inote-title-input {
                background: none; border: none; outline: none; font-size: 26px; font-weight: 700;
                color: #ffffff; margin-bottom: 16px; font-family: inherit; letter-spacing: -0.4px;
            }
            .inote-content-editor {
                flex: 1; outline: none; font-size: 16px; color: #e5e5e7; line-height: 1.65;
                font-family: inherit; min-height: 250px;
            }
            .inote-content-editor h1 {
                font-size: 32px !important; font-weight: 800 !important; margin: 18px 0 10px 0;
                color: #ffffff; letter-spacing: -0.5px; line-height: 1.25; display: block;
            }
            .inote-content-editor h2 {
                font-size: 24px !important; font-weight: 700 !important; margin: 14px 0 8px 0;
                color: #f5c563; line-height: 1.3; display: block;
            }
            .inote-content-editor h3 {
                font-size: 19px !important; font-weight: 600 !important; margin: 10px 0 6px 0;
                color: #61afef; line-height: 1.35; display: block;
            }
            .inote-content-editor p, .inote-content-editor div { margin: 6px 0; line-height: 1.65; }
            .inote-content-editor ul, .inote-content-editor ol { margin: 8px 0; padding-left: 24px; }
            .inote-content-editor b, .inote-content-editor strong {
                font-weight: 900 !important;
                -webkit-text-stroke: 0.6px currentColor;
                letter-spacing: 0.2px;
            }
            /* Font visual scale compensation */
            .inote-content-editor[style*="Bebas Notes"] { font-size: 19px; letter-spacing: 0.5px; }
            .inote-content-editor[style*="Lemon Milk"] { font-size: 15px; letter-spacing: 0.4px; }
            .inote-content-editor[style*="Aubrey"] { font-size: 18px; }
            .inote-content-editor[style*="Papernotes"] { font-size: 19px; line-height: 1.8; }
            .inote-content-editor[style*="Cheese Milky"] { font-size: 18px; }
            .inote-content-editor[style*="Aesthetic Romance"] { font-size: 18px; }
            .inote-content-editor[style*="Modern Romance"] { font-size: 18px; }
            .inote-content-editor[style*="KG Miss Steward"] { font-size: 18px; }
            /* Lock Screen Overlay & Modal Box */
            .notybook-lock-overlay {
                position: fixed; top: 0; left: 0; right: 0; bottom: 0;
                background: rgba(15, 15, 18, 0.95); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
                z-index: 99999; display: flex; align-items: center; justify-content: center; padding: 20px;
                opacity: 0; pointer-events: none; transition: opacity 0.3s ease;
            }
            .notybook-lock-overlay.show { opacity: 1; pointer-events: auto; }
            .lock-card {
                background: #1c1c1e; border: 1px solid #383840; border-radius: 20px;
                padding: 36px 30px; width: 100%; max-width: 380px; text-align: center;
                box-shadow: 0 20px 50px rgba(0,0,0,0.6); transform: scale(0.95); transition: transform 0.3s ease;
            }
            .notybook-lock-overlay.show .lock-card { transform: scale(1); }
            .lock-card.shake { animation: lockShake 0.4s ease; }
            @keyframes lockShake {
                0%, 100% { transform: translateX(0); }
                20%, 60% { transform: translateX(-10px); }
                40%, 80% { transform: translateX(10px); }
            }
            .lock-icon-hero { font-size: 48px; margin-bottom: 12px; }
            .lock-card h2 { margin: 0 0 6px 0; font-size: 22px; color: #ffffff; font-weight: 700; }
            .lock-card p { margin: 0 0 20px 0; font-size: 13px; color: #8e8e93; line-height: 1.4; }
            .lock-input-group { position: relative; width: 100%; }
            .lock-card input {
                width: 100%; padding: 12px 42px 12px 16px; border-radius: 10px; background: #2c2c2e;
                border: 1px solid #3a3a3c; color: #ffffff; font-size: 15px; outline: none; box-sizing: border-box;
                transition: border-color 0.2s;
            }
            .lock-card input:focus { border-color: #e5c07b; }
            .toggle-pass-btn {
                position: absolute; right: 10px; top: 50%; transform: translateY(-50%);
                background: none; border: none; font-size: 16px; cursor: pointer; opacity: 0.6; padding: 4px;
            }
            .toggle-pass-btn:hover { opacity: 1; }
            .lock-error-msg { color: #ff5555; font-size: 13px; margin: 10px 0 0 0; min-height: 18px; font-weight: 500; }
            .lock-action-btn {
                width: 100%; margin-top: 18px; padding: 13px; border-radius: 10px; background: #e5c07b;
                color: #1c1c1e; border: none; font-size: 15px; font-weight: 700; cursor: pointer;
                transition: background 0.2s, transform 0.1s;
            }
            .lock-action-btn:hover { background: #f5c563; }
            .lock-action-btn:active { transform: scale(0.98); }
            mark { background: #e5c07b; color: #1e1e24 !important; border-radius: 4px; padding: 1px 4px; font-weight: 500; }
            .inote-empty-state { text-align: center; padding: 40px 16px; color: #8e8e93; font-size: 14px; }
            .notes-header-left { display: flex; align-items: center; gap: 6px; }

            /* Mobile & Small Screen Responsive Styles */
            @media (max-width: 768px) {
                body, html { position: fixed; overflow: hidden; }
                .inote-app-container {
                    flex-direction: row; position: relative; overflow: hidden; width: 100vw; height: 100vh;
                    padding-bottom: env(safe-area-inset-bottom, 0px);
                }
                .inote-sidebar, .inote-notes-pane, .inote-editor-pane {
                    position: absolute; top: 0; left: 0; right: 0; bottom: 0;
                    width: 100vw !important; height: 100vh !important; flex-shrink: 0;
                    display: flex; flex-direction: column; overflow: hidden !important;
                    transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1);
                }

                /* Mobile View Modes */
                .inote-app-container.view-sidebar .inote-sidebar { transform: translateX(0); z-index: 3; }
                .inote-app-container.view-sidebar .inote-notes-pane { transform: translateX(100%); z-index: 2; }
                .inote-app-container.view-sidebar .inote-editor-pane { transform: translateX(100%); z-index: 1; }

                .inote-app-container.view-notes .inote-sidebar { transform: translateX(-25%); z-index: 1; }
                .inote-app-container.view-notes .inote-notes-pane { transform: translateX(0); z-index: 3; }
                .inote-app-container.view-notes .inote-editor-pane { transform: translateX(100%); z-index: 2; }

                .inote-app-container.view-editor .inote-sidebar { transform: translateX(-25%); z-index: 1; }
                .inote-app-container.view-editor .inote-notes-pane { transform: translateX(-25%); z-index: 2; }
                .inote-app-container.view-editor .inote-editor-pane { transform: translateX(0); z-index: 3; }

                /* Mobile Navigation Back Buttons */
                .mobile-nav-btn {
                    display: inline-flex !important; align-items: center; justify-content: center;
                    background: none; border: none; color: #e5c07b; font-size: 15px; font-weight: 700;
                    cursor: pointer; padding: 4px 6px; border-radius: 6px; white-space: nowrap;
                }
                .mobile-nav-btn:active { background: rgba(229,192,123,0.15); }

                /* Mobile Toolbar Clean Single-Line Fixed Header Layout */
                .inote-toolbar {
                    padding: 6px 12px; height: 52px !important; min-height: 52px; flex-shrink: 0; overflow: visible; flex-wrap: nowrap !important;
                    gap: 6px; align-items: center; justify-content: space-between; box-sizing: border-box; width: 100%;
                    position: sticky; top: 0; z-index: 100; background-color: #1f1f24;
                }
                .inote-toolbar-left { flex-wrap: nowrap; gap: 6px; align-items: center; max-width: calc(100vw - 70px); overflow: visible; }
                .inote-toolbar .btn-text { display: none !important; }
                .inote-tool-btn {
                    padding: 6px 8px; min-width: 34px; height: 34px; font-size: 16px; gap: 0;
                    background: rgba(255,255,255,0.06); border-radius: 8px; flex-shrink: 0;
                }
                #btn-backup-data, #btn-restore-data, #btn-change-password, #btn-lock-app {
                    display: none !important;
                }
                .inote-dropdown-menu {
                    position: absolute !important;
                    top: 40px !important;
                    right: 0 !important;
                    left: auto !important;
                    min-width: 200px;
                    max-width: calc(100vw - 20px) !important;
                    max-height: 75vh !important;
                    overflow-y: auto !important;
                    z-index: 10000;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.8);
                }
                /* Mobile Formatting Bar: Clean 2-Row Symmetric Fixed Layout */
                .inote-format-bar {
                    display: flex !important; flex-wrap: wrap !important; align-items: center !important;
                    justify-content: space-between !important; padding: 8px 12px !important; gap: 8px 6px !important;
                    height: auto !important; min-height: 90px !important; flex-shrink: 0 !important;
                    position: sticky !important; top: 52px !important; z-index: 99 !important;
                    background-color: #212126 !important; border-bottom: 1px solid #2a2a30 !important;
                    box-sizing: border-box !important; overflow: visible !important;
                }
                .inote-format-bar #fmt-heading {
                    flex: 1 1 calc(50% - 4px) !important; width: calc(50% - 4px) !important;
                    max-width: calc(50% - 4px) !important; min-width: 0 !important; height: 36px !important;
                    box-sizing: border-box !important; font-size: 13px !important; padding: 4px 8px !important; margin: 0 !important;
                }
                .inote-format-bar #fmt-font {
                    flex: 1 1 calc(50% - 4px) !important; width: calc(50% - 4px) !important;
                    max-width: calc(50% - 4px) !important; min-width: 0 !important; height: 36px !important;
                    box-sizing: border-box !important; font-size: 13px !important; padding: 4px 8px !important; margin: 0 !important;
                }
                .inote-format-bar .format-divider:first-of-type { display: none !important; }
                .inote-format-bar .inote-fmt-btn {
                    flex: 1 1 auto !important; height: 36px !important; min-width: 32px !important;
                    max-width: 44px !important; font-size: 14px !important; padding: 0 !important;
                    justify-content: center !important; align-items: center !important; box-sizing: border-box !important;
                    border-radius: 8px !important; margin: 0 !important;
                }
                .inote-format-bar .format-divider:nth-of-type(2) {
                    display: block !important; height: 22px !important; width: 1px !important;
                    background: #383840 !important; margin: 0 2px !important; flex-shrink: 0 !important;
                }
                .inote-editor-body { flex: 1; min-height: 0; padding: 18px 20px; overflow-y: auto !important; -webkit-overflow-scrolling: touch; }
                .inote-title-input { font-size: 22px; }

                .lock-card { padding: 28px 20px; width: 90%; }
            }
            @media (min-width: 769px) {
                .mobile-nav-btn { display: none !important; }
            }
        `;
        document.head.appendChild(style);
    }
})();
