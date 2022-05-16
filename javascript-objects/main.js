var student = {
  firstName: 'Nolan',
  lastName: 'Reda',
  age: 28
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('Name:', fullName);

student.livesInIrvine = false;
student.previousOcupation = 'Carpenter';

console.log('Lives in irvine?', student.livesInIrvine);
console.log('Previous Ocupation:', student.previousOcupation);

var vehicle = {
  make: 'Nissan',
  model: 'Xterra',
  year: '2007'
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;

console.log('color:', vehicle.color);
console.log('Is convertible?', vehicle.isConvertible);

var pet = {
  name: 'DK',
  type: 'cat'
};

delete pet.name;
delete pet.type;

console.log('Pet:', pet);
