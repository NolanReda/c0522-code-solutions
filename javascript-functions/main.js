function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var minutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSeconds:', minutesToSecondsResult);

function greet(name) {
  var greeting = 'Hey' + ', ' + name + '!';
  return greeting;
}

var getGreeting = greet('Nolan');
console.log('greetResult:', getGreeting);

function getArea(x, y) {
  var area = x * y;
  return area;
}

var areaResult = getArea(17, 42);
console.log('The area is:', areaResult);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var firstName = getFirstName({ firstName: 'Nolan', lastName: 'Reda' });
console.log('getFirstName result:', firstName);

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}

var lastElement = getLastElement(['Earth,', 'Fire,', 'Water,', 'Air']);
console.log('The last Element is ', lastElement);
