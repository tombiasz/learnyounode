const os = require('os');
const net = require('net');

function zeroFill(number, maxLength = 2) {
  const value = `0${number}`;
  return value.slice(value.length - maxLength, value.length);
}

function getCurrentDateTime() {
  const date = new Date();
  const year = date.getFullYear();
  const month = zeroFill(date.getMonth() + 1);
  const day = zeroFill(date.getDate());
  const hour = zeroFill(date.getHours());
  const minutes = zeroFill(date.getMinutes());

  return `${year}-${month}-${day} ${hour}:${minutes}${os.EOL}`;
}

const port = process.argv[2];
const server = net.createServer((socket) => {
  socket.end(getCurrentDateTime());
});
server.listen(port);
