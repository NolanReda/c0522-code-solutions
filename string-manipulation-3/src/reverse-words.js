/* exported reverseWords */

// create a new array
// split the parameter string at the spaces into an array
// loop the split array
// at each index, split the word into a new array and reverse the order then join them back together into one string
// push each new reversed word into the first created array
// join the created array together into a string divided by spaces
// return the final string

function reverseWords(string) {
  var newArray = [];
  var reverseString = string.split(' ');
  for (let i = 0; i < reverseString.length; i++) {
    var reverseWord = reverseString[i].split('').reverse().join('');
    newArray.push(reverseWord);
    var finalAnswer = newArray.join(' ');
  }
  return finalAnswer;
}
