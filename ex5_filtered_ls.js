const fs = require('fs');
const path = require('path');

const dirPath = process.argv[2];
const extension = process.argv[3];

const checkFileExtension = ext => file => path.extname(file) === `.${ext}`;
const endsWithExtension = checkFileExtension(extension);
const printFilteredFiles = (err, files) => {
  if (err) {
    console.log(err);
  }

  const filteredFiles = files.filter(endsWithExtension);
  filteredFiles.map(file => console.log(file));
};

fs.readdir(dirPath, printFilteredFiles);
