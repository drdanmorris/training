var http = require("http");
var mongojs = require("mongojs");
var uri = 'mongodb://drdanmorris:guest@ds047020.mongolab.com:47020/airnz';
var db = mongojs.connect(uri, ["fleet"]);

function requestHandler(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    db.fleet.find({}, function(err, records) {
        var html = '<table border="1">', i = records.length;
        while(i--) html += getRowForRecord(records[i]);
        html += '</table>';
        response.write(html);
        response.end();
    });
}

function getRowForRecord(record) {
    return '<tr><td>' + record.reg + '</td><td>' + record.type + '</td><td>' + record.model + '</td><td>' + record.year + '</td></tr>';
}

http.createServer(requestHandler).listen(3001);
console.log('server listening on port 3001');