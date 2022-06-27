/* exported isAnagram */

// split both parameter strings at the spaces and join them as one continuous string
// loop through the second array
// if the array reaches the end without encountering a problem, return true
// if the entry at the current index of second isn't included in the first string, return false
// if the entry at the current index of second IS included in first,
// loop both arrays and count the instances of that letter
// if they match, continue the original loop,
// if not, return false from the function

function isAnagram(firstString, secondString) {
  var newFirst = firstString.split(' ').join('');
  var newSecond = secondString.split(' ').join('');
  for (let i = 0; i < newSecond.length; i++) {
    if (i === newSecond.length - 1) {
      return true;
    } else if (!newFirst.includes(newSecond[i])) {
      return false;
    } else if (newFirst.includes(newSecond[i])) {
      var first = 0;
      for (let f = 0; f < newFirst.length; f++) {
        if (newFirst[f] === newSecond[i]) {
          first++;
        }
      }
      var second = 0;
      for (let s = 0; s < newSecond.length; s++) {
        if (newSecond[s] === newSecond[i]) {
          second++;
        }
      }
      if (first === second) {
        continue;
      } else if (first !== second) {
        return false;
      }
    }
  }
}
