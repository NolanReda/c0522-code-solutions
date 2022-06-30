const fs = require('fs');

const pro = process.argv[2];
fs.readFile(pro, 'utf8', (err, data) => {
  if (err) throw (err);
  console.log(data);
});
