
var app = require('app');
var BrowserWindow = require('browser-window');

require('crash-reporter').start();

// keep this reference, otherwise window will be GCed
var mainWindow = null;

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', function () {
  mainWindow = new BrowserWindow({
    height: 600,
    title: 'Bulbs CMS',
    width: 800
  });
  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  mainWindow.openDevTools({detatched: true});

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
});
