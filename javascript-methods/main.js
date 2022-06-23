var a = 2;
var b = 4;
var c = 6;

var maximumValue = Math.max(a, b, c);
console.log('Maximum Value:', maximumValue);

var heros = ['Ters Sendon', 'Rajivari', 'Garon Jard', 'Cala Brin'];

var randomNumber = Math.random() * heros.length;

var randomIndex = Math.floor(randomNumber);
console.log('Random Index:', randomIndex);

var randomHero = heros[randomIndex];
console.log('Random Hero:', randomHero);

var library = [
  {
    title: 'Star Wars: Heir to the Empire',
    author: 'Timothy Zahn'
  },
  {
    title: 'Star Wars: Dark Force Rising',
    author: 'Timothy Zahn'
  },
  {
    title: 'Star Wars: The Last Command',
    author: 'Timothy Zahn'
  }
];

var lastBook = library.pop();
console.log('Last book in library:', lastBook);

var firstBook = library.shift();
console.log('First book in library:', firstBook);

var jedi = {
  title: 'Light of the Jedi (The High Republic)',
  author: 'Charles Soule'
};
var sith = {
  title: 'Darth Bane: Path of Destruction',
  author: 'Drew Karpyshyn'
};

library.push(jedi);
library.unshift(sith);
library.splice(1, 1);
console.log('Library:', library);

var fullName = 'Nolan Reda';

var firstAndLastName = fullName.split(' ');
console.log(firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();
console.log('sayMyName;', sayMyName);

console.log('arbitrary change');
