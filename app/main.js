
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
    center: true,
    height: 720,
    title: 'Bulbs CMS',
    width: 1280
  });
  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  process.argv.forEach(function(val, index) {
    if (val === '-d' || val === '--debug') {
      mainWindow.openDevTools({detatched: true});
      console.log('Starting with dev tools...');
    }
  });

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
});
