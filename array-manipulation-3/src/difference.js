/* exported difference */

// create a loop to store entries that match in both original arrays
// loop through first array
// if an entry isn't included in the second
// add it to the new one
// do the same for the second array
// return the new array

function difference(first, second) {
  var newArr = [];
  for (let i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      newArr.push(first[i]);
    }
  }
  for (let f = 0; f < second.length; f++) {
    if (!first.includes(second[f])) {
      newArr.push(second[f]);
    }
  }
  return newArr;
}
