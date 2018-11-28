const http = require ('http');
const express = require ('express');
const helmet = require('helmet');
const morgan = require('morgan');
const body = require('./routes/request');
const app = express();

app.use(helmet());
app.use(morgan('tiny'));

const port = process.env.PORT || 80;
if (process.argv.length <= 2) {
    console.log("no argument for IP");
    process.exit();
}
const datalogger_address = process.argv[2];
body.address(datalogger_address);
app.use('/', body.router);
app.get('', (req, res) => {
    res.send("Hello from localhost port 80");
});

app.listen(port,() => console.log(`Listening on port ${port}...`));
