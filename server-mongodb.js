var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:8080/Cluster0";

MongoClient.connect(url, function(err, db) {
  if (err) {console.log("Database Failed"); throw err;}
  console.log("Database created!");
  db.close();
});