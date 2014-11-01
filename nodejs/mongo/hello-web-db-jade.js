var http = require('http');
var mongojs = require('mongojs');
var jade = require('jade');
var express = require('express');
var morgan = require('morgan')
var port = 3002;

var uri = 'mongodb://drdanmorris:guest@ds047020.mongolab.com:47020/airnz';
var db = mongojs.connect(uri, ['fleet']);

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(morgan('combined')); // logging
app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
	db.fleet.find({}, function(err, records) {
		res.render('index', { fleet : records });
	});
 
});
app.listen(port);
console.log('server listening on port ' + port);
