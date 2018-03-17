const http = require('http');

function httpGet(url) {
  return new Promise((resolve, reject) => {
    http
      .get(url, (response) => {
        let data = '';
        response
          .setEncoding('utf8')
          .on('data', (chunk) => { data += chunk; })
          .on('end', () => resolve(data))
          .on('error', err => reject(err));
      })
      .on('error', err => reject(err));
  });
}

const urls = process.argv.slice(2);
Promise.all(urls.map(httpGet))
  .then(responses => responses.map(val => console.log(val)));
