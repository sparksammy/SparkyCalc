const {app, BrowserWindow } = require('electron')

app.whenReady().then(() => {
    const form1 = new BrowserWindow({
        width: 300,
        height: 330,
        webPrefrences: {
            nodeIntegration: true
        }
    });

    form1.loadFile('index.html')
});