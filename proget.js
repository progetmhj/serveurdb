var express = require('express');
var cors = require('cors');
var app = express();
var multer = require("multer");
const path = require("path");
const fs = require("fs");
var bodyparser = require('body-parser');
var con = require('./routers/Connection')
app.use(bodyparser.json());
app.use(cors());

var client = require('./routers/ClientR')
app.use('/client', client)

var condidat = require('./routers/CondidateR')
app.use('/candidate', condidat)

var admin = require('./routers/AdminR')
app.use('/admin', admin)

var option = require('./routers/OptionR')
app.use('/options', option)

var postule = require('./routers/PostuleR')
app.use('/postule', postule)
var record = require('./routers/recordesR')
app.use('/record', record)

var Storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null,__dirname+"/uploads");
    },
    filename: function(req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});
var upload = multer({
    storage: Storage
}).array("imgUploader", 3); //Field name and max count


app.post("/api/Upload", function(req, res) {
    upload(req, res, function(err) {
        if (err) {
            return res.end("Something went wrong!");
        }
        return res.end("File uploaded sucessfully!.");
    });
});

app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "./uploads/"+req.query.image));
});

app.listen(3000, function () {

    console.log("okkkkk ")
});
