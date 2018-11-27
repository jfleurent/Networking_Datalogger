const http = require('http');

var obj;
var time;
var index;
var vals;

module.exports.address = function setUrl(address) {
    var dataloggerAddress = {
        ip: address,
        path: "/?command=DataQuery&uri=dl:Average5Min&format=json&mode=most-recent&p1=1"
    }
    console.log(`${dataloggerAddress.ip}${dataloggerAddress.path}`);
    fetchData(`http://${dataloggerAddress.ip}${dataloggerAddress.path}`);
};

function ConvertJSON(obj) {
    time = obj.data[0].time;
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
            console.log(`Time: ${time}`);
            console.log(`Index: ${index}`);
            console.log(`Value: ${val}`);
        });
    });
    req.on('error', (e) => {
        console.error(`Failed Request: ${e.message}`);
    })
    req.end();
}