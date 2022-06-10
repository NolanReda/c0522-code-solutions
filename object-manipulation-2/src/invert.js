/* exported invert */

// loop through the object
// assign swap the assignments of the keys and values
// return swaped data in a new object

function invert(object) {
  var reverseObject = {};
  for (var key in object) {
    reverseObject[object[key]] = key;
  }
  return reverseObject;
}
