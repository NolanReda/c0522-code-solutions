/* exported invert */

function invert(object) {
  var reverseObject = {};
  for (var key in object) {
    reverseObject[object[key]] = key;
  }
  return reverseObject;
}
