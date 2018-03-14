const fs = require('fs');

const filePath = process.argv[2];
const encoding = 'utf8';
const countLines = (string) => {
  const lines = string.split('\n');
  const count = lines.length - 1;
  return count;
};
const printCountLines = async (err, string) => {
  if (err) {
    console.log(err);
  }
  const count = await countLines(string);
  console.log(count);
};

fs.readFile(filePath, encoding, printCountLines);
