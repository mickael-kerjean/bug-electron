const {app, BrowserWindow} = require('electron');
const path = require('path');

app.on('ready', () => {
    let win = new BrowserWindow({
        width: 1200,
        height: 800
    });
    
    //bug    
    win.loadURL("https://todo.kerjean.me");

    //that one freeze as soon as you click the demo button and the wekan screen boot up
    //win.loadURL("https://apps.sandstorm.io/app/m86q05rdvj14yvn78ghaxynqz7u2svw6rnttptxx49g1785cdv1h")

    // This other app using meteor is freezing again when you click on the meteor login button (aka the red button that doesn't have the google logo in it)
    // win.loadURL("https://demo.rocket.chat")
});
