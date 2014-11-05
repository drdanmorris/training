var http = require('http');
var express = require('express');
var morgan = require('morgan')
var port = 3000;
var app = express();
app.use(morgan('combined')); // logging
app.use(express.static(__dirname + '/sass'));
app.listen(port);
console.log('server listening on port ' + port);
