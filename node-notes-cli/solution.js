const $json = require('./data.json');
const fs = require('fs');

if (process.argv[2] === 'what') {
  $json.nextId++;
}

if (process.argv[2] === 'read') {
  for (const key in $json.notes) {
    console.log(key + ': ' + JSON.stringify($json.notes[key], null, 2));
  }
}

if (process.argv[2] === 'create') {
  $json.notes[$json.nextId] = process.argv[3];
  $json.nextId++;
  fs.writeFile('./data.json', JSON.stringify($json, null, 2), 'utf-8', err => {
    if (err) throw err;
  });
}

if (process.argv[2] === 'update') {
  $json.notes[process.argv[3]] = process.argv[4];
  fs.writeFile('./data.json', JSON.stringify($json, null, 2), 'utf-8', err => {
    if (err) throw err;
  });
}

if (process.argv[2] === 'delete') {
  delete $json.notes[process.argv[3]];
  fs.writeFile('./data.json', JSON.stringify($json, null, 2), 'utf8', err => {
    if (err) throw err;
  });
}
