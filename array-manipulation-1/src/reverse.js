/* exported reverse */
function reverse(array) {
  var newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.unshift(array[i]);
  } return newArray;
}
