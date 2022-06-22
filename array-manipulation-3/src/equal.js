/* exported equal */

// loop through both arrays
// if each one does not match when the loop counter is in the same place, return false
// otherwise return true

function equal(first, second) {
  var f = 0;
  for (let s = 0; s < second.length; s++) {
    if (f === first.length - 1) {
      return true;
    } else if (first[f] === second[s]) {
      f++;
    } else if (first[f] !== second[s]) {
      return false;
    }
  }
}
