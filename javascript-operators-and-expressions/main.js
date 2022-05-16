var width = 5;
var height = 10;

var area = width * height;
console.log('area:', area);
console.log('type of area:', typeof area);

var bill = 20;
var payment = 25;

var change = payment - bill;
console.log('change:', change);
console.log('type of change:', typeof change);

var quizzes = 80;
var midterm = 85;
var final = 90;

var grade = (quizzes + midterm + final) / 3;
console.log('grade:', grade);
console.log('type of grade:', typeof grade);

var firstName = 'Nolan';
var lastName = 'Reda';

var fullName = firstName + ' ' + lastName;
console.log('Name:', fullName);
console.log('type of fullName:', typeof fullName);

var pH = 5;

var isAcidic = pH < 7;
console.log('is it acidic?', isAcidic);
console.log('type of isAcidic:', typeof isAcidic);

var headCount = 300;

var isSparta = headCount === 300;
console.log('This is Sparta:', isSparta);
console.log('type of isSparta:', typeof isSparta);

var motto = fullName;

motto = fullName + ' ' + 'is the GOAT!';
console.log('motto:', motto);
console.log('type of motto:', typeof motto);
