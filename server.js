var MongoClient = require('mongodb').MongoClient;
var fs = require('fs');
var path = process.cwd();
var uri = fs.readFileSync(path + "\\mongodb url.txt");

MongoClient.connect(uri.toString(), function(err, client) {
  if(err) console.log("conection failed: "+ uri);
  
   var database = client.db("DailyVoltages");
   var object = {date : " 10/16/2018", volt1 : 90, volt2 : 74};
   database.collection("voltages").update({date : " 10/16/2018"},{$set: {volt3 : 29}},false,true);
   // perform actions on the collection object
   client.close();
});