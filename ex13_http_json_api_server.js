const http = require('http');
const url = require('url');

function parseIsoDate(str) {
  return new Date(str);
}

function getTime(date) {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };
}

function getUnixTime(date) {
  return {
    unixtime: date.getTime(),
  };
}

function sendJson(response, data = '') {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify(data));
}

function send404(response, msg = 'Not found') {
  response.writeHead(404, { 'Content-Type': 'text/plain' });
  response.end(msg);
}

const port = process.argv[2];
const server = http.createServer((request, response) => {
  const route = url.parse(request.url, true);
  const date = parseIsoDate(route.query.iso);
  switch (route.pathname) {
    case '/api/parsetime':
      sendJson(response, getTime(date));
      break;
    case '/api/unixtime':
      sendJson(response, getUnixTime(date));
      break;
    default:
      send404();
      break;
  }
});

server.listen(port);
