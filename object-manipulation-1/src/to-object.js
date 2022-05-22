/* exported toObject */

// create a new object
// make the first index of the keyValuePair array into the property of the object
// assign the value at index 1 as the property of that object

function toObject(keyValuePair) {
  var newObject = {};
  newObject[keyValuePair[0]] = keyValuePair[1];
  return newObject;
}
