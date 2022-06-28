/* exported equal */

// create a counter to track the array position in the second array
// loop through the first arrays
// if the lengths don't match, return false
// if one of the arrays reaches its end, return true,
// if the arrays at each place match, increment the counter for the second array
// if at any point the arrays at their counters don't match, return false

function equal(first, second) {
  let s = 0;
  for (let f = 0; f <= first.length; f++) {
    if (first.length !== second.length) {
      return false;
    }
    if (s === second.length) {
      return true;
    } else if (first[f] === second[s]) {
      s++;
    } else if (first[f] !== second[s]) {
      return false;
    }
  }
}
