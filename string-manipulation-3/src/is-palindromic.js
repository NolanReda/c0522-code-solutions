/* exported isPalindromic */

// create a new array
// split the string by spaces
// loop the array of split strings and split them further by each character and join everything into one continuous string of letters
// add the full continuous string into the new array that was created at the start
// join the new array together in one string, split it again, reverse it and join one final time
// join the original slit into one string
// if the final results of both are the same, return true

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
