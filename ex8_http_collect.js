const http = require('http');

const url = process.argv[2];

class SimpleBuffer {
  constructor() {
    this.data = [];
  }

  write(chunk) {
    this.data.push(chunk);
  }

  toString() {
    return this.data.join('');
  }

  get length() {
    return this.toString().length;
  }
}

http
  .get(url, (response) => {
    const buffer = new SimpleBuffer();
    response
      .setEncoding('utf8')
      .on('data', chunk => buffer.write(chunk))
      .on('end', () => {
        console.log(buffer.length);
        console.log(buffer.toString());
      })
      .on('error', console.error);
  })
  .on('error', console.error);
