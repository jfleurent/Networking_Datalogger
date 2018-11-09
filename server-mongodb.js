var MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb+srv://datalogger-server:datalogger@cluster0-wgo34.mongodb.net/test?retryWrites=true', function(err, client) {
  if(err) console.log("conection failed: ");
  
   var database = client.db("DailyVoltages");
   var object = {date : " 10/16/2018", volt1 : 90, volt2 : 74};
   database.collection("voltages").update({date : " 10/16/2018"},{$set: {volt3 : 29}},false,true);
   // perform actions on the collection object
   client.close();
});