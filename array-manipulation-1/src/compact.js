/* exported compact */
function compact(array, value) {
  var newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== value) {
      newArray.push(array[i]);
    }
  } return newArray;
}
