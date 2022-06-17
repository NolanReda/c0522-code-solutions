/* exported isPalindromic */

function isPalindromic(string) {
  var newArray = [];
  var split = string.split(' ');
  for (let i = 0; i < split.length; i++) {
    var newStuff = split[i].split('').join('');
    newArray.push(newStuff);
    var finalThing = newArray.join('').split('').reverse().join('');
    var finalSplit = split.join('');
  }
  if (finalSplit === finalThing) {
    return true;
  } else {
    return false;
  }
}
