/* exported compact */

// create a new array to show included values
// search each value in a given arary
// find falsey values inside the array
// skip over them and push truthy values to a new array

function compact(array, value) {
  var newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!array[i]) {
      continue;
    } newArray.push(array[i]);
  } return newArray;
}
