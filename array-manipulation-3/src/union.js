/* exported union */

// create a new array to hold the desired values of both parameter arrays
// loop through the first array
// if each value does not yet appear in the new array, add it
// if it does exist in the new array, skip it
// do the same for the second array

function union(first, second) {
  var newArr = [];
  for (let f = 0; f < first.length; f++) {
    if (!newArr.includes(first[f])) {
      newArr.push(first[f]);
    }
  }
  for (let s = 0; s < second.length; s++) {
    if (!newArr.includes(second[s])) {
      newArr.push(second[s]);
    }
  }
  return newArr;
}
