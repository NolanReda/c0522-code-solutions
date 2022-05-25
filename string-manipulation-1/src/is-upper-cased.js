/* exported isUpperCased */

// create a function to check if a word is all uppercase
// check if a the characters in a string are all uppercase
// if all characters match, return with true boolean
// if characters are not, return with false boolean

function isUpperCased(str) {
  if (str === str.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
