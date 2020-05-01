var http = require("http");
http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("All right. we're up !");
  })
  .listen(3000);
console.log("Server running at http://localhost:3000/");
