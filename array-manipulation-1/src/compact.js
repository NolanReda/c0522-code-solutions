/* exported compact */

// create a new array to show included values
// search each value in a given arary
// find values other than the ommited value to be included in the new array
// skip over ommited values
// give back the new array out of the funciton

function compact(array, value) {
  var newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== value) {
      newArray.push(array[i]);
    }
  } return newArray;
}
// console.log(compact([{}, null, {}, {}], null));
