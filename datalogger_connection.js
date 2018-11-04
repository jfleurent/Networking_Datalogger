var http = require('http');

var obj,voltAvg,voltAvgValue,sensorAvg, 
    sensorAvgValue, sensorMax, sensorMaxValue, 
    sensorMin, sensorMinValue, sensorStd, 
    sensorStdValue, sensorTot, sensorTotValue;

var options = {
        host: '',
        path: '/?command=DataQuery&uri=dl:Battery_Sensor&format=json&mode=most-recent&p1=1'
      };

function request(){
  var req = http.request(options,(res) => {
    console.log(`STATUS: ${res.statusCode}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        obj = JSON.parse(chunk);
        ConvertJSON(obj);
    });
    res.on('end', () => {
      console.log(voltAvg +  " : " + voltAvgValue  + " : " + sensorAvg + " : " + 
      sensorAvgValue + " : " + sensorMax + " : " + sensorMaxValue + " : " + 
      sensorMin + " : " + sensorMinValue + " : " + sensorStd + " : " + 
      sensorStdValue+ " : " + sensorTot+ " : " + sensorTotValue)
      console.log('No more data in response.');
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
      voltAvg = 'BattV_Avg';
      voltAvgValue = obj.data[0].vals[0];
      break;
      case 1:
      sensorAvg = 'BattSensor_Avg';
      sensorAvgValue = obj.data[0].vals[1];
      break;
      case 2:
      sensorMax = 'BattSensor_Max';
      sensorMaxValue = obj.data[0].vals[2];
      break;
      case 3:
      sensorMin = 'BattSensor_Min';
      sensorMinValue = obj.data[0].vals[3];
      break;
      case 4:
      sensorStd = 'BattSensor_Std';
      sensorStdValue = obj.data[0].vals[4];
      break;
      case 5:
      sensorTot = 'BattSensor_Tot';
      sensorAvgValue = obj.data[0].vals[5];
      break;
    }
  }

}

