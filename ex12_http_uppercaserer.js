const http = require('http');


const port = process.argv[2];
const server = http.createServer((request, response) => {
  let data = '';
  if (request.method === 'POST') {
    request
      .on('data', (chunk) => { data += chunk; })
      .on('end', () => {
        response.write(data.toUpperCase());
        response.end();
      });
  }
});

server.listen(port);
