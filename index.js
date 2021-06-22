global.electron = require('electron');
const { app, BrowserWindow } = require('electron')
let window

app.whenReady().then(() => {
    createWindow('http://localhost:3000')
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

function createWindow(local) {
  window = new BrowserWindow({
    fullscreen: true,
    resizable: false,
    center: true,
    autoHideMenuBar: true,
    frame: true
  })
  
  window.loadURL(local)
}
