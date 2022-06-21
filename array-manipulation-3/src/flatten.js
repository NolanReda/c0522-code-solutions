/* exported flatten */

// create a new array to combine everything from the parameter array
// loop through each array and push the value of each index into the new array
// if the index is itself an array, loop through that also and push it's index's into the new array
// return the new array

function flatten(array) {
  // console.log('array:', array);
  var flat = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      var yes = [];
      for (let a = 0; a < array[i].length; a++) {
        yes.push(array[i][a]);
        // console.log('yes:', yes);
        for (let y = 0; y < yes.length; y++) {
          if (!flat.includes(yes[y])) {
            flat.push(yes[y]);
          }
        }
      }
    } else {
      flat.push(array[i]);
    }
  }
  // console.log('flat:', flat);
  return flat;
}
