var express = require('express');
const bodyParser = require('body-parser');
var app = express();
var fs = require("fs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "JSON.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.post('/addUser', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "JSON.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       var user = req.body.username;
       var pass = req.body.password;
       data.push({"username":user,"password":pass});
       console.log( data );
       res.end("thanks for regestration");
    });
 })

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})