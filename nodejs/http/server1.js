var http = require("http");

function handler(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h1>Kia ora te ao</h1>");
  response.write("<h2>" + new Date().toLocaleTimeString() + "</h2>");
  response.end();
 }

http.createServer(handler).listen(3000);

console.log('Web server listening on port 3000');

