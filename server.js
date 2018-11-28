
var http = require('http');

const express  = require ('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser  = require('body-parser');
const app	 = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }))

MongoClient.connect("mongodb://datalogger-server:datalogger@cluster0-shard-00-00-wgo34.mongodb.net:27017,cluster0-shard-00-01-wgo34.mongodb.net:27017 ,cluster0-shard-00-02-wgo34.mongodb.net:27017 /DailyVoltages?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin"
,{ useNewUrlParser: true }, (err, database) => {
	if (err) return console.log(err)
	require('./app/routes')(app, database);
	app.listen(port, () => {
		console.log("We are live on " + port);
	})
})