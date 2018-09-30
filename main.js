import url from 'url'
import path from 'path'
import { app, BrowserWindow, Menu } from 'electron'

// import { mainMenuTemplate } from './menu'

let mainWindow

// Listen for app to be reay
app.on('ready', () => {
    //Create New Window
    mainWindow = new BrowserWindow({
        length: 200,
        width: 800
    })

    //Load html into windows
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }))

    //Build Menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate)
    // Insert Menu
    Menu.setApplicationMenu(mainMenu)

})

const mainMenuTemplate = [
    {
        label: 'File',
        submenu: [
            { label: 'Add User' },
            { label: 'Switch User' },
        ]
    },
    {
        label: 'Edit',
        submenu: [
            { role: 'undo' },
            { role: 'redo' },
            { type: 'separator' },
            { role: 'cut' },
            { role: 'copy' },
            { role: 'paste' },
            { role: 'pasteandmatchstyle' },
            { role: 'delete' },
            { role: 'selectall' }
        ]
    },
    {
        label: 'View',
        submenu: [
            { role: 'reload' },
            { role: 'forcereload' },
            { role: 'toggledevtools' },
            { type: 'separator' },
            { role: 'resetzoom' },
            { role: 'zoomin' },
            { role: 'zoomout' },
            { type: 'separator' },
            { role: 'togglefullscreen' }
        ]
    },
    {
        role: 'window',
        submenu: [
            { role: 'minimize' },
            { role: 'close' }
        ]
    },
    {
        role: 'help',
        submenu: [
            {
                label: 'Learn More',
                click() { require('electron').shell.openExternal('https://electronjs.org') }
            }
        ]
    }
]

if (process.platform === 'darwin') {
    mainMenuTemplate.unshift({
        label: app.getName(),
        submenu: [
            { role: "about" },
            { type: "separator" },
            { role: "services", submenu: [] },
            { type: "separator" },
            { role: "hide" },
            { role: "hideothers" },
            { role: "unhide" },
            { type: "separator" },
            { role: "quit" }
        ]
    });
}