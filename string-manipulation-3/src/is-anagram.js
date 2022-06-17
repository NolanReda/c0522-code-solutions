/* exported isAnagram */

function isAnagram(firstString, secondString) {
  for (let i = 0; i < firstString.length; i++) {
    if (i === firstString.length - 1) {
      return true;
    } else if (!secondString.includes(firstString[i])) {
      return false;
    } else if (secondString.includes(firstString[i])) {
      continue;
    }
  }
}
