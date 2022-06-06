/* exported isLowerCased */

// check if a the characters in a string are all lowercase
// if all characters match, return with true boolean
// if characters are not, return with false boolean

function isLowerCased(str) {
  if (str === str.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
