/* exported getWords */

// take each value separated by spaces from a string value
// convert them over to a new array split by spaces
// unless finding an empty string
// return empty array

function getWords(string) {
  var none = [];
  if (string) {
    return string.split(' ');
  } else if (string === '') {
    return none;
  }
}
