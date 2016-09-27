const {BrowserWindow, shell} = require('electron')

const help = {
  label: 'Help',
  submenu: [
    {
      label: 'About',
      click: (menuItem, browserWindow) => {
        let aboutWindow = new BrowserWindow({width: 500, height: 280, resizable: false})
        aboutWindow.loadURL(`file://${__dirname}/../../about.html`)
      }
    },
    {
      type: 'separator'
    },
    {
      label: 'Report issues on GitHub',
      click: (menuItem, browserWindow) => {
        shell.openExternal('https://github.com/sgleung/sparks/issues')
      }
    },
    {
      type: 'separator'
    },
    {
      label: 'GitHub',
      click: (menuItem, browserWindow) => {
        shell.openExternal('https://github.com/sgleung/sparks')
      }
    },
    {
      label: 'Twitter',
      click: (menuItem, browserWindow) => {
        shell.openExternal('https://twitter.com/sgleung')
      }
    }
  ]
}

module.exports = help
