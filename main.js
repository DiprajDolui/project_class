const {app,BrowserWindow} = require('electron')

function createWindow(){
    const window = new BrowserWindow({
        width: 900,
        height: 600
    })

    window.loadFile('front_page_structure.html')
}

app.whenReady().then(createWindow)
