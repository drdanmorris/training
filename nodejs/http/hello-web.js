// hello-web.js

var http = require("http");
var port = 3000;

function handler(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h1>Hello...</h1>");

  // unnecessary embellishment
  function world(c, t) {
    response.write("<h1>...World</h1>");
    if(--c <= 0) response.end();
    else setTimeout(function(){world(c, t)}, t);
  }

  setTimeout(function(){world(1, 0)}, 2000)
  //world(10, 400);

}

http.createServer(handler).listen(port);
console.log('Web server listening on port ' + port);

