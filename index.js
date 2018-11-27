const http = require ('http');
const express = require ('express');
const helmet = require('helmet');
const morgan = require('morgan');
const body = require('./routes/request');
const app = express();

const test = require('./routes/test');

app.use(helmet());
app.use(morgan('tiny'));

 //temp////

const port = process.env.PORT || 80;
if (process.argv.length <= 2) {
    console.log("no argument for IP");
} else {
    const datalogger_address = process.argv[2];
    body.address(datalogger_address);
}

app.use('', test);
app.listen(port,() => console.log(`Listening on port ${port}...`));
////////