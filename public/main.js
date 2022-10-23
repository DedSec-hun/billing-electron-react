const {BrowserWindow, app, Menu, ipcMain} = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')

function createWindow() {

    const win = new BrowserWindow({
        width: 1200,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false,
        }
    })
    win.loadURL(
        isDev
            ? 'http://localhost:3000'
            : `file://${path.join(__dirname, '../build/index.html')}`
    )

    const template = [
        {
            label: 'File',
            submenu: [
                {
                    label: "Print",
                    click: () => {
                        win.webContents.printToPDF({
                            pageSize : 'A4',
                            landscape: false,
                            printBackground: true,
                        }).then((data) =>{
                            let pdfPath = `${__dirname}/temp.pdf`;
                            fs.rm(pdfPath, () => {
                                fs.writeFile(pdfPath, data, function (error) {
                                    if (error) {
                                        console.log(error);
                                    }
                                    win.loadURL('http://localhost:3000/pdfLoader.html');
                                });
                            });
                            //win.loadURL('data:application/pdf;base64,' + data)
                        })
                    }
                }
            ]
        }
    ]
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

    ipcMain.on('back', async (event, arg) => {
        win.webContents.goBack()
        console.log("back")
    })

}

app.on('ready', createWindow);

//Conenct to database
const express = require('express');
const dbapp = express();
const mysql = require('mysql');
const cors = require('cors');
const fs = require("fs");
dbapp.use(cors());
dbapp.use(express.json());

//Andon adatbázisra csatlakozás
const db = mysql.createConnection({

    user: 'root',
    host: 'localhost',
    password: 'root',
    database: 'mydb',
    timezone: 'utc'
});
app.on('ready', () => {
    dbapp.listen(5174, () => {
        console.log("YAY megy a BACKEND !!!");
    });
});


dbapp.get('/get', (req, res) => {
    db.query("SELECT id FROM mytable", (err, result) => {
        if (err) {
            console.log("VALAMI HIBA VAN" + err.code + err.message);
        } else {
            res.send(result);
        }
    });

});



