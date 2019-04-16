const express = require('express');
const router = express.Router();
const http = require('http');
const data = require('./data');

var obj;
var date;
var isoDate;
var index;
var phototransistor;
var temperature;
var requestNum = 0;

module.exports.address = function setUrl(address) {
    var dataloggerAddress = {
        ip: address,
        path: "/?command=DataQuery&uri=dl:Thirty_Minutes&format=json&mode=most-recent&p1=1"
    }
    var endpoint = `http://${dataloggerAddress.ip}${dataloggerAddress.path}`;
    fetchData(endpoint);
    // setInterval function calls the fetchData function every 1800000 miliseconds or 30 Min
    setInterval( function() { fetchData(endpoint); }, 1800000);
};

function ConvertJSON(obj) {
    date = obj.data[0].time.substring(0, 10);
    isoDate = obj.data[0].time;
    index = obj.data[0].no;
    phototransistor = obj.data[0].vals[0];
    temperature = obj.data[0].vals[1];
}

// Converts reading from voltage to Farenheit 
function convertToFarenheit() {
    var tempCelcius = 100 * (temperature/1000) - 50;
    return Math.round((tempCelcius * (9/5) + 32) * 100) / 100;
}

function fetchData(address) {
    var req = http.request(address, (res) => {
        console.log(`STATUS: ${res.statusCode}`);
        console.log(`Http Request #${requestNum++} being made...`);
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            obj = JSON.parse(chunk);
            ConvertJSON(obj);
        });
        res.on('end',() => {
            data.logData(date, isoDate, index, phototransistor, convertToFarenheit());
        });
    });
    req.on('error', (e) => {
        console.error(`Failed Request: ${e.message}`);
    });
    req.end();
}

// `date` has to follow the format: 2019-04-06
router.get('/date/:date', (req, res) => {
    const dateQuery = req.params.date;
    async function getLoggedData() {
        const loggedData = await data.DataLogger.find({"date" : dateQuery});
        res.send(loggedData);
    }
    getLoggedData();
});

module.exports.router = router;