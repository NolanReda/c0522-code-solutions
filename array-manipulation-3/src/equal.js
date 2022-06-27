/* exported equal */

// create a counter to track the first array position in the first array
// loop through both arrays
// if each one does not match when the loop counter is in the same place, return false
// if they do match, increment the counter for the first array and continue the loop
// if the end of the array is reached, return true
// if the 2 arrays are not the same length, return false
// if the arrays are empty, return true

function equal(first, second) {
  let s = 0;
  if (first.length !== second.length) {
    for (let f = 0; f < first.length; f++) {
      if (first[f] === second[s]) {
        s++;
      } else if (s === second.length - 1) {
        return true;
      } else if (first[f] !== second[s]) {
        return false;
      }
    }
  }
}

// if (f === first.length - 1 && first[first.length === second[second.length]]) {
//   return true;
// } else if (first[f] === second[s]) {
//   f++;
// } else if (first[f] !== second[s]) {
//   return false;
// }
