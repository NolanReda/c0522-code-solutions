/* exported getKeys */

// create a new array to hold the keys of each object
// while the function moves through each index
// check the key names and push them into a new array

function getKeys(object) {
  var keys = [];
  for (const key in object) {
    keys.push(key);
  } return keys;
}
