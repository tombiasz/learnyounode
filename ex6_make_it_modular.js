const myModule = require('./ex6_make_it_modular_module');

const dirPath = process.argv[2];
const extension = process.argv[3];

myModule(dirPath, extension, (err, files) => {
  if (err) {
    console.log(err);
  }

  files.map(file => console.log(file));
});
