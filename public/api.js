//Rest API
// var express = require('express');  //require the express framework
import express from "express"
var app = express();
// var fs = require("fs"); //require file system object
import fs from "fs"  //file system module
import path from "path"    //path module
const __dirname = path.resolve(path.dirname('')); 

//Endpoint to get the list of URL's
app.get('/getData', function (req, res) {     //request and the response 
   fs.readFile( __dirname + "/" + "data.json", 'utf8', function (err, data) {   //The __dirname string gives the directory path of the current module
      console.log( data );
      res.end( data );
   });
})


// var user = {
//    "# id" : {
//       "name" : "mohit",
//       "password" : "password4",
//       "profession" : "teacher",
//       "id": 4
//    }
// }

// app.post('/addUser', function (req, res) {
//    // First read existing users.
//    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//       data = JSON.parse( data );
//       data["# id"] = user["# id"];
//       console.log( data );
//       res.end( JSON.stringify(data));
//    });
// })

//Create a server to listen at port 8082
var server = app.listen(8082, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})