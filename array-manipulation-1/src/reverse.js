/* exported reverse */

// create a new array to hold the reverse of the given one
// check each index of a given array in reverse order
// push each index into the new array one by one

function reverse(array) {
  var newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.unshift(array[i]);
  }
  return newArray;
}
