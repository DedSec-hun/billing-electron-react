const {BrowserWindow, app} = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')


function createWindow() {

const win = new BrowserWindow({
width: 1200,
height: 600,
webPreferences: {
    nodeIntegration: true,
enableRemoteModule: true
}
})
win.loadURL(
    isDev
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname, '../build/index.html')}`
    )
                       
                        }
    
app.on('ready', createWindow);

