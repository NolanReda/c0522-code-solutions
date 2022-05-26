/* exported take */

// create a new array to contain the items up to my count
// check each index of the array up to my count point and stop
// push those things from my count point into the new array

function take(array, count) {
  var newArray = [];
  for (let i = 0; i < array[count] - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
