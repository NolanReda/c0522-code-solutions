/* exported tail */

// create a new array
// skip the first index of a given array
// push all others into the new one

function tail(array) {
  var newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== 0) {
      newArray.push(array[i]);
    }
  } return newArray;
}
