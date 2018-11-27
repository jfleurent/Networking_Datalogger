const http = require('http');
const data = require('./data');

var obj;
var date;
var time;
var index;
var val;

module.exports.address = function setUrl(address) {
    var dataloggerAddress = {
        ip: address,
        path: "/?command=DataQuery&uri=dl:Average5Min&format=json&mode=most-recent&p1=1"
    }
    var endpoint = `http://${dataloggerAddress.ip}${dataloggerAddress.path}`;
    console.log(endpoint);
    fetchData(endpoint);
    setInterval( function() { fetchData(endpoint); }, 300000);
};

function ConvertJSON(obj) {
    date = obj.data[0].time.substring(0, 10);
    time = obj.data[0].time.substring(11, 19);
    index = obj.data[0].no;
    val = obj.data[0].vals[0];
}

function fetchData(address) {
    var req = http.request(address, (res) => {
        console.log(`STATUS: ${res.statusCode}`);
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            obj = JSON.parse(chunk);
            ConvertJSON(obj);
        });
        res.on('end',() => {
            console.log(`Date: ${date}`);
            console.log(`Time: ${time}`);
            console.log(`Index: ${index}`);
            console.log(`Value: ${val}`);
            data.logData(date, time, index, val);
        });
    });
    req.on('error', (e) => {
        console.error(`Failed Request: ${e.message}`);
    })
    req.end();
}