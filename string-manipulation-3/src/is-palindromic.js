/* exported isPalindromic */

function isPalindromic(string) {
  var reverse = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  return reverse;
  // if (string === reverse) {
  //   return true;
  // } else {
  //   return false;
  // }
}
