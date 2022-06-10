/* exported takeRight */

function takeRight(array, count) {
  var newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i > array.length - count - 1) {
      newArray.push(array[i]);
    }

  }
  return newArray;
}
