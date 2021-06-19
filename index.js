const { app, BrowserWindow } = require('electron')

app.whenReady().then(() => {
  createWindow('http://localhost:3000')
})



function createWindow(local) {
  const win = new BrowserWindow({
    width: 375,
    height: 525,
    resizable: false,
    center: true,
    autoHideMenuBar: true,
    frame: false
  })

  win.loadURL(local)
}