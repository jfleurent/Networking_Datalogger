
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/data', {useNewUrlParser: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));

const dataLoggerSchema = new mongoose.Schema({
    date: String,
    time: String,
    index: Number,
    voltage: Number
});

const DataLogger = mongoose.model('DataLogger', dataLoggerSchema);

module.exports.logData = async function logData(dataDate, dataTime, dataNo, dataVol) {
    const dataLogger = new DataLogger({
        date: dataDate,
        time: dataTime,
        index: dataNo,
        voltage: dataVol
    });

    const result = await dataLogger.save();
    console.log(result);
}

module.exports.DataLogger = DataLogger;