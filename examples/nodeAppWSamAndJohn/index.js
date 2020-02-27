var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());         // add ability to read json
app.use(bodyParser.urlencoded({     // add ability to read files
    extended: true
}));

var cats = require('./cats')(app);

app.get('/', function(req, res) {
    //res.send('Hello World 2!');
    res.json({hello: 'friend'});
});

var server = app.listen(3000, function() {
    console.log('Server running on 3000');
});