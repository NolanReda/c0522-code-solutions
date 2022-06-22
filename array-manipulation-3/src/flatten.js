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
      var yes = [];
      for (let a = 0; a < array[i].length; a++) {
        yes.push(array[i][a]);
      }
      for (let y = 0; y < yes.length; y++) {
        flat.push(yes[y]);
      }

    } else {
      flat.push(array[i]);
    }
  }
  return flat;
}
