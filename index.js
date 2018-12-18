
var express = require('express');
var bodyParser = require('body-parser');

var db = require('./config/db_config');

var app = express();

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

app.use(express.static('views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(allowCrossDomain);

var routes = require('./api/routes/router');
routes(app);

app.listen(3003, function () {
    console.log("Server Runs on 3003")
})
