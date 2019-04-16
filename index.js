const http = require ('http');
const express = require ('express');
const helmet = require('helmet');
const morgan = require('morgan');
const body = require('./routes/request');
const app = express();

app.use(helmet());
app.use(morgan('tiny'));

const port = 10205;
var datalogger_address = "69.88.163.52"
if (process.argv.length > 2) {
    datalogger_address = process.argv[2];
}
console.log(`Connecting to: http://${datalogger_address}/`);
body.address(datalogger_address);
app.use('/', body.router);

app.listen(port,() => console.log(`Listening on port ${port}...`));
