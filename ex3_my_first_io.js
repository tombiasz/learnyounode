const fs = require('fs');

const filePath = process.argv[2];
const buffer = fs.readFileSync(filePath);
const contents = buffer.toString();
const lines = contents.split('\n');
console.log(lines.length - 1);
