const takeAChance = require('./take-a-chance');

const myLuck = takeAChance('Nolan');

myLuck
  .then(value => console.log(value))
  .catch(Error => console.log(Error.message));
