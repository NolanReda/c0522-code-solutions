/* exported equal */

// create a counter to track the first array position in the first array
// loop through both arrays
// if each one does not match when the loop counter is in the same place, return false
// if they do match, increment the counter for the first array and continue the loop
// if the end of the array is reached, return true
// if the 2 arrays are not the same length, return false
// if the arrays are empty, return true

function equal(first, second) {
  let f = 0;
  for (let s = 0; s < second.length; s++) {
    if (f === first.length - 1 && first[first.length === second[second.length]]) {
      return true;
    } else if (first.length !== second.length) {
      return false;
    } else if (first[f] === second[s]) {
      f++;
    } else if (first[f] !== second[s]) {
      return false;
    }
  }
  return true;
}
