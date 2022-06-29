const add = require('./add');
const subtract = require('./subtract');
const muiltiply = require('./multiply');
const divide = require('./divide');

if (typeof parseInt(process.argv[2]) === 'number' &&
  process.argv[3] === 'plus' && typeof parseInt(process.argv[4]) === 'number') {
  console.log(add(parseInt(process.argv[2]), parseInt(process.argv[4])));
} else if (typeof parseInt(process.argv[2]) === 'number' &&
  process.argv[3] === 'minus' && typeof parseInt(process.argv[4]) === 'number') {
  console.log(subtract(parseInt(process.argv[2]), parseInt(process.argv[4])));
} else if (typeof parseInt(process.argv[2]) === 'number' &&
  process.argv[3] === 'over' && typeof parseInt(process.argv[4]) === 'number') {
  console.log(divide(parseInt(process.argv[2]), parseInt(process.argv[4])));
} else if (typeof parseInt(process.argv[2]) === 'number' &&
  process.argv[3] === 'times' && typeof parseInt(process.argv[4]) === 'number') {
  console.log(muiltiply(parseInt(process.argv[2]), parseInt(process.argv[4])));
}
