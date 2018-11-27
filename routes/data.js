
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/data', {useNewUrlParser: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));

const dataLoggerSchema = new mongoose.Schema({
    time: {type: Date, default: Date.now},
    number: Number,
    val: [ Number ]
});

const DataLogger = mongoose.model('DataLogger', dataLoggerSchema);

module.exports.logData = async function logData(dataTime, dataNo, dataVal) {
    const dataLogger = new DataLogger({
        time: dataTime,
        number: dataNo,
        val: [ dataVal ]
    });

    const result = await dataLogger.save();
    console.log(result);
}