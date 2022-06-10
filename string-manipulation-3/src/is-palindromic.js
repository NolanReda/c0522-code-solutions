/* exported isPalindromic */

function isPalindromic(string) {
  var arr = string.split('');
  var arrReverse = arr.reverse().join('');
  if (string === arrReverse) {
    return true;
  } else {
    return false;
  }
}
