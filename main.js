const { app, BrowserWindow } = require('electron')
const path = require('path')

// Add this block at the top of your main.js file
try {
  require('electron-reloader')(module)
} catch (_) {}

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  win.loadFile('index.html')
  win.setMenu(null)
  // Enable DevTools
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})