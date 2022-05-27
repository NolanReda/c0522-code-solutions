var books = [{
  isbn: '9780345511386',
  title: 'The Old Republic: Deceived',
  author: 'Paul Kemp'
}, {
  isbn: '1000000000000',
  title: 'Tales of the Jedi: The Golden Age of the Sith',
  author: 'Tom Veitch, Kevin J Anderson'
}, {
  isbn: '6666666666666',
  title: 'The Old Republic: Annihilation',
  author: 'Drew Karpyshyn'
}];

console.log('books:', books);

var stringify = JSON.stringify(books);
console.log('typeof stringify', typeof stringify);

var jstring = '{"id": 666, "name": "Eddie"}';

console.log(jstring);
console.log('typeof string:', typeof jstring);

var parse = JSON.parse(jstring);

console.log('id:', parse.id);
console.log('name:', parse.name);
console.log('parse:', typeof parse);
