const fs = require('fs');
const http = require('http');

const port = process.argv[2];
const filePath = process.argv[3];
const server = http.createServer((request, response) => {
  const stream = fs.createReadStream(filePath);
  stream.pipe(response);
});

server.listen(port);
