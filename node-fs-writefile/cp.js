const fs = require('fs');
const pro2 = process.argv[2];

const pro3 = process.argv[3];

fs.readFile(pro2, 'utf8', (err, data) => {
  if (err) throw (err);
  fs.writeFile('./' + pro3, data, 'utf8', err => {
    if (err) throw err;
  });
});
