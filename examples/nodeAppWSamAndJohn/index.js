var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function(req, res) {
    //res.send('Hello World 2!');
    res.json({hello: 'friend'});
});

var server = app.listen(3000, function() {
    console.log('Server running on 3000');
});