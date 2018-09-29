import url from 'url'
import path from 'path'
import { app, BrowserWindow, Menu } from 'electron'

import { mainMenuTemplate } from './menu'

let mainWindow

// Listen for app to be reay
app.on('ready', () => {
    //Create New Window
    mainWindow = new BrowserWindow({})

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
