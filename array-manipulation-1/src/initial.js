/* exported initial */

// create a new array to contain the all but last value of given array
// ommit the final index of given array
// push all others into the new array

function initial(array) {
  var newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== array.length - 1) {
      newArray.push(array[i]);
    }
  } return newArray;
}
