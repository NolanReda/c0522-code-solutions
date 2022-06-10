/* exported takeRight */

function takeRight(array, count) {
  var newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] - count);
  }
  return newArray.reverse();
}
