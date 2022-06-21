/* exported unique */

// create a new array to hold unique instances from old array
// loop through old array and check if the index doesn't exist in the new array
// if not, add it to the new array

function unique(array) {
  var newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (!newArr.includes(array[i])) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
