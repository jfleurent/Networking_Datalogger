
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

async function logData() {
    const dataLogger = new DataLogger({
        number: 1,
        val: [ 3 ]
    });

    const result = await dataLogger.save();
    console.log(result);
}

logData();

// module.exports = mongoose;