// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080

server.on('error', (e) => {
  console.error(`The server failed to start ${e}`);
});
// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(PORT, HOST, () => {
  // Put a friendly message on the terminal
  console.log(`Server running at http://${HOST}:${PORT}/`);
});


