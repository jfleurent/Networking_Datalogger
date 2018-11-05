var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var fs = require('fs');
var path = process.cwd();
var uri = fs.readFileSync(path + "\\mongodb url.txt");

var obj,voltAvgValue, 
    sensorAvgValue, sensorMaxValue
    ,sensorMinValue, sensorStdValue
    , sensorTotValue, currentDate;

var recordCount = 0;
var recordTitle = 'record'+recordCount;

var options = {
        host: '192.168.1.9',
        path: '/?command=DataQuery&uri=dl:Battery_Sensor&format=json&mode=most-recent&p1=1'
      };
      
function request(){
  var req = http.request(options,(res) => {
    console.log(`STATUS: ${res.statusCode}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        obj = JSON.parse(chunk);
        currentDate = obj.data[0].time.substring(0,10);
        ConvertJSON(obj);
    });
    res.on('end', () => {
      console.log("BattV_Avg : " + voltAvgValue  + "BattSensor_Avg : " + 
      sensorAvgValue + "BattSensor_Max : " + sensorMaxValue + 
      " BattSensor_Min : " + sensorMinValue + " BattSensor_Std : " + 
      sensorStdValue+ " BattSensor_Tot : " + sensorTotValue)

      MongoClient.connect(uri.toString(), function(err, client) {
        if(err) console.log("conection failed: "+ uri);
        
         var database = client.db("DailyVoltages");
         var dataRecord = {BattV_Avg : voltAvgValue, 
                          BattSensor_Avg : sensorAvgValue,
                          BattSensor_Max : sensorMaxValue,
                          BattSensor_Min : sensorMinValue, 
                          BattSensor_Std : sensorStdValue,
                          BattSensor_Tot : sensorTotValue};
    
         database.collection("voltages").insert({date : currentDate ,recordData : dataRecord});
         // perform actions on the collection object
         client.close();
      });
  
    });

  });
  
  req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
  });

req.end();
}

setInterval(request,10000);

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

