/* exported reverseWords */

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
