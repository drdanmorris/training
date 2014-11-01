// hello-web.js

var http = require("http");

function handler(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h1>Hello...</h1>");

  // unnecessary embellishment
  setTimeout(function(){
  	response.write("<h2>...World</h2>");
  	response.end();
  }, 2000);

}

http.createServer(handler).listen(3001);
console.log('Web server listening on port 3000');

