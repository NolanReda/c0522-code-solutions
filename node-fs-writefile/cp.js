const fs = require('fs');
const pro2 = process.argv[2];

let dataVar = '';

fs.readFile(pro2, 'utf8', (err, data) => {
  if (err) throw (err);
  dataVar = data;
});

const pro3 = process.argv[3];

fs.writeFile('./' + pro3, dataVar, 'utf8', err => {
  if (err) throw err;
});
