const fs = require('fs');

const pro = process.argv[2] + '\n';

fs.writeFile('note.txt', pro, 'utf8', err => {
  if (err) throw err;
});
