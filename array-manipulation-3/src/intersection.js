/* exported intersection */

// create new array to hold desired entry(ies) from parameter arrays
// loop first array
// if an entry appears in the second array as well, add it to the new array
// if not, skip over it
// return the new array

function intersection(first, second) {
  var newArr = [];
  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      newArr.push(first[i]);
    }
  }
  return newArr;
}
