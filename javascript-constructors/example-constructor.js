function ExampleConstructor() {}

console.log('prototypes:', ExampleConstructor.prototype);
console.log('type of prototype', typeof ExampleConstructor.prototype);

var newExample = new ExampleConstructor();

console.log('newExample:', newExample);
console.log('instance of:', newExample instanceof ExampleConstructor);
