/* exported reverseWord */

// check value of string at its last value
// create a new string adding that value to the beginning
// return the new string back from the function

function reverseWord(string) {
  var reverse = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reverse = reverse + string[i];
  }
  return reverse;
}
