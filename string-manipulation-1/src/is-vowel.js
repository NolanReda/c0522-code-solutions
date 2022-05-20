/* exported isVowel */

// check if string value matches against any vowel both capital or lower case
// if yes, return true
// if no, return false

function isVowel(string) {
  if (string === 'a' || string === 'A') {
    return true;
  } else if (string === 'e' || string === 'E') {
    return true;
  } else if (string === 'i' || string === 'I') {
    return true;
  } else if (string === 'o' || string === 'O') {
    return true;
  } else if (string === 'u' || string === 'U') {
    return true;
  } else {
    return false;
  }
}
