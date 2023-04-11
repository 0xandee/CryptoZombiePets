var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/web3", express.static(__dirname + "/node_modules/web3.js-browser/build/"));
app.use("/scripts", express.static(__dirname + "/node_modules/web3.js-browser/build/"));
var mongoose = require('mongoose');

const cors = require('cors');
app.use(cors({origin: '*'}));

app.locals.helper = require('./helper');
var https = require('https');

//Upload File
const fileUpload = require('express-fileupload');
app.use(fileUpload());

//Cookie
const cookieParser = require('cookie-parser');
app.use(cookieParser());

    
//FS
var fs = require("fs");
var server = require("http").Server(app);
var io = require("socket.io")(server);
app.io = io;
server.listen( process.env.PORT || 3000);

var session = require('express-session');
app.use(session({
    resave: true, 
    saveUninitialized: true, 
    secret: 'xxx12232132aaa@@@', 
    cookie: { maxAge: 6000000 }
}));


//body-paser
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

loadConfigFile("./config.json");

// Functions
function loadConfigFile(file){
    var obj;
    fs.readFile(file, 'utf8', function(err, data){
        if(err) throw err;
        obj = JSON.parse(data);

        require("./routes/main")(app, obj, randomString, obj.secretTokenNo);
        require("./routes/gameplay")(app, obj, randomString, obj.secretTokenNo);
    });
}


function randomString(length){
    var result = "";
    var array = ["a", "A", "b", "B", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "y", "w", "t", "u", "v", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for(var i=1; i<=length; i++){
        result += array[Math.floor(Math.random() * array.length)];
    }
    return result;
}
