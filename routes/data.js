
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/data', {useNewUrlParser: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));

const dataLoggerSchema = new mongoose.Schema({
    date: String,
    label: String,
    index: Number,
    phototransistor: Number,
    temperature: Number
});

const DataLogger = mongoose.model('sensor', dataLoggerSchema);

module.exports.logData = async function logData(dataDate, dataTime, dataNo, dataPhototransistor, dataTemperature) {
    const dataLogger = new DataLogger({
        date: dataDate,
        label: dataTime,
        index: dataNo,
        phototransistor: dataPhototransistor,
        temperature: dataTemperature
    });

    const result = await dataLogger.save();
    console.log(result);
}

module.exports.DataLogger = DataLogger;