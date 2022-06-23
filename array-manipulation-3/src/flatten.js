/* exported flatten */

// create a new array to combine everything from the parameter array
// loop through each array and push the value of each index into the new array
// if the index is itself an array,
// loop through that also and push it's index's into a second new array
// loop the second array and add it's values into the first created array
// return the new array

function flatten(array) {
  var flat = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      for (let a = 0; a < array[i].length; a++) {
        flat.push(array[i][a]);
      }
    } else {
      flat.push(array[i]);
    }
  }
  return flat;
}
