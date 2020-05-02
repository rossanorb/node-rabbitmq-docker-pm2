var http = require("http");
http
  .createServer(function (req, res) {

      res.writeHead(200, {
        "Content-Type": "text/plain"
      });

      // console.log('Iniciando Producer');

      // const {spawn} = require("child_process");

      // const client = spawn("node", ["client.js"]);
      // client.stdout.on("data", data => {
      //   console.log(`stdout: ${data}`);
      // });

      // setTimeout(function(){

      //   console.log('Iniciando Workers');

      //   const worker1 = spawn("node", ["consumer.js"]);
      //   worker1.stdout.on("data", data => {
      //     console.log(`worker 1: ${data}`);
      //   });

      //   const worker2 = spawn("node", ["consumer.js"]);
      //   worker2.stdout.on("data", data => {
      //     console.log(`worker 2: ${data}`);
      //   });
      //  }, 10000);


    res.end("All right. we're up !");
  })
  .listen(3000);

  console.log("Server running at http://localhost:3000/");