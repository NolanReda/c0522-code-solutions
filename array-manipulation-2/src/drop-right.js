/* exported dropRight */

// create a new array
// go through the original array until reaching the where the count indicates to stop
// add all indexes to the new array until the stopping point
// return the new array

function dropRight(array, count) {
  var newArray = [];
  for (let i = 0; i < array.length - count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
