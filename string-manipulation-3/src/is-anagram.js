/* exported isAnagram */

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
        return true;
      } else if (first !== second) {
        return false;
      }
    }
  }
}
