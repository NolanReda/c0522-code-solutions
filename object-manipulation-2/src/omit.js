/* exported omit */

// create a new object with all values of the source object included
// loop the keys array and if the values coincide with properties of the new object
// delete those values

function omit(source, keys) {
  var result = {};
  Object.assign(result, source);
  for (let i = 0; i < keys.length; i++) {
    if (result[keys[i]] !== undefined) {
      delete result[keys[i]];
    }
  }
  return result;
}
