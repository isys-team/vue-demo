var express = require('express');
var cors = require('cors')
var app = express();
var itemsGenerator = require('./services/itemsGenerator');

const corsOptions = {
    origin: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true
}

app.options("/", cors(corsOptions));
app.get('/', cors(corsOptions),function (req, res) {
    res.send(JSON.stringify(itemsGenerator.generateItems()));
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

module.exports = app;