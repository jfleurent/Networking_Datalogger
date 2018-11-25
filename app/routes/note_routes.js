
var http = require('http');

const express  = require ('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser  = require('body-parser');
const db	= require('./config/db');
const app	 = express();
const port = 8000;

var obj,voltAvgValue, 
sensorAvgValue, sensorMaxValue
,sensorMinValue, sensorStdValue
, sensorTotValue, currentDate;

var options = {
	host: '192.168.1.9',
	path: '/?command=DataQuery&uri=dl:Battery_Sensor&format=json&mode=most-recent&p1=1'
  };

module.exports = function(app, db) {
	app.get('/:id', (req, res) => {
		const id = req.params.id;
		const details = {date : id };
		db.collection('voltages').find(details).toArray(function (err, item) {
			if (err) {
				res.send({ 'error': item });
			} else {
				res.send(item);
			}
		});
	});


setInterval(request,10000); 
var hour = 0
var minute = 0
var randomDate = 2018 + '/' + (Math.random * 12) + 1 +'/' + (Math.random * 30) + 1
function request(){

  MongoClient.connect(db.url, function(err, client) {
    if(err) console.log("conection failed: "+ db.url);
    
    if(hour == 12){
      randomDate = 2018 + '/' + (Math.random * 12) + 1 +'/' + (Math.random * 30) + 1
      hour = 0
    }
    if(minute == 60){
      hour++
      minute = 0
    }
    var newTime = hour + ':' + minute
    var randomVoltage = (Math.random * 9) + 1

     var database = client.db("DailyVoltages");


     database.collection("voltages").insert({date : randomDate ,time : newTime, voltage : randomVoltage});
     // perform actions on the collection object
     client.close();
     minute+=5
  });

  // var req = http.request(options,(res) => {
  //   console.log(`STATUS: ${res.statusCode}`);
  //   res.setEncoding('utf8');
  //   res.on('data', (chunk) => {
  //       obj = JSON.parse(chunk);
  //       currentDate = obj.data[0].time.substring(0,10);
  //       ConvertJSON(obj);
  //   });
  //   res.on('end', () => {
  //     console.log("BattV_Avg : " + voltAvgValue  + "BattSensor_Avg : " + 
  //     sensorAvgValue + "BattSensor_Max : " + sensorMaxValue + 
  //     " BattSensor_Min : " + sensorMinValue + " BattSensor_Std : " + 
  //     sensorStdValue+ " BattSensor_Tot : " + sensorTotValue)

  //     MongoClient.connect(uri.toString(), function(err, client) {
  //       if(err) console.log("conection failed: "+ uri);
        
  //        var database = client.db("DailyVoltages");
  //        var dataRecord = {BattV_Avg : voltAvgValue, 
  //                         BattSensor_Avg : sensorAvgValue,
  //                         BattSensor_Max : sensorMaxValue,
  //                         BattSensor_Min : sensorMinValue, 
  //                         BattSensor_Std : sensorStdValue,
  //                         BattSensor_Tot : sensorTotValue};
    
  //        database.collection("voltages").insert({date : currentDate ,recordData : dataRecord});
  //        // perform actions on the collection object
  //        client.close();
  //     });
  
  //   });

  // });
  
  req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
  });

req.end();
}

function ConvertJSON(obj){
  for(i = 0; i < 6; i++){
 
    switch(i){
      case 0:
      voltAvgValue = obj.data[0].vals[0];
      break;
      case 1:
      sensorAvgValue = obj.data[0].vals[1];
      break;
      case 2:
      sensorMaxValue = obj.data[0].vals[2];
      break;
      case 3:
      sensorMinValue = obj.data[0].vals[3];
      break;
      case 4:
      sensorStdValue = obj.data[0].vals[4];
      break;
      case 5:
      sensorAvgValue = obj.data[0].vals[5];
      break;
    }
  }

}
};