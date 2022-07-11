const otherNmbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const otherLanguages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

// create a new output array
// loop through the input array
// pass each index of the array as the argument of the predicate
// assign the return of each predicate call to the output array
// return the output array
const map = (array, predicate) => {
  const outputArray = [];
  for (let i = 0; i < array.length; i++) {
    outputArray.push(predicate(array[i]));
  }
  return outputArray;
};

const newDoubled = x => x * 2;
const newPrices = x => String('$' + x.toFixed(2));
const theUpperCase = string => string.toUpperCase();
const firLet = str => str[0];
