const { app,BrowserWindow,Menu } = require('electron');

const path = require('path');
const url = require('url');

if (process.env.NODE_ENV !== 'production') {
    require('electron-reload')(__dirname,{
    })
}

let mainWindow

app.on('ready', () => {
    mainWindow = new BrowserWindow({})
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/index.html'),
        protocol: 'file',
        slashes: true
    }))
})


//*************************************************************** */