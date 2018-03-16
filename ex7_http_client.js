const http = require('http');

const url = process.argv[2];
http
  .get(url, (response) => {
    response
      .setEncoding('utf8')
      .on('data', console.log)
      .on('error', console.error);
  })
  .on('error', console.error);
