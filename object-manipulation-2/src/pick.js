/* exported pick */

// create a new object
// loop the array of keys
// if the values in key have corisponding values in the source
// assign those values to the new object

function pick(source, keys) {
  var result = {};
  for (let i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      result[keys[i]] = source[keys[i]];
    }
  }
  return result;
}
