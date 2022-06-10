/* exported reverseWords */

function reverseWords(string) {
  var reverseString = string.split(' ').reverse().join(' ');
  return reverseString;
}
