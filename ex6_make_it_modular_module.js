const fs = require('fs');
const path = require('path');

const checkFileExtension = ext => file => path.extname(file) === `.${ext}`;
const filterDirectory = (dirPath, extension, callback) => {
  const endsWithExtension = checkFileExtension(extension);
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return callback(err);
    }

    const filteredFiles = files.filter(endsWithExtension);
    return callback(null, filteredFiles);
  });
};

module.exports = filterDirectory;
