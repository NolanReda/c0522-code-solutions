function ExampleConstructor() {}

console.log('prototypes:', ExampleConstructor.prototype.value);
console.log('type of prototype', typeof ExampleConstructor.prototype.value);

var newExample = new ExampleConstructor();

console.log('newExample:', newExample);
console.log('instance of:', newExample instanceof ExampleConstructor);
