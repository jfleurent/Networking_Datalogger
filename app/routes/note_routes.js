var ObjectID = require('mongodb').ObjectID

module.exports = function(app, db) {
	app.get('/:id', (req, res) => {
		const id = req.params.id;
		const details = {date : id };
		db.collection('voltages').find(details).toArray(function (err, item) {
			if (err) {
				console.log(item);
				res.send({ 'error': item });
			} else {
				res.send(item);
			}
		});
	});

	app.post('/notes', (req, res) => {
		res,sebd('hello');
		// var database = client.db("DailyVoltages");
        //  var dataRecord = {BattV_Avg : voltAvgValue, 
        //                   BattSensor_Avg : sensorAvgValue,
        //                   BattSensor_Max : sensorMaxValue,
        //                   BattSensor_Min : sensorMinValue, 
        //                   BattSensor_Std : sensorStdValue,
        //                   BattSensor_Tot : sensorTotValue};
    
        //  database.collection("voltages").insert({date : currentDate ,recordData : dataRecord});
         
        //  client.close();
	});
};