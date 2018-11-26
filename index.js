const http = require ('http');
const express = require ('express');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();

const test = require('./routes/test');

app.use(helmet());
app.use(morgan('tiny'));
app.use('', test);

//temp////
const port = 80;
app.listen(port,() => console.log(`Listening on port ${port}...`));
////////