/* exported takeRight */

function takeRight(array, count) {
  if (array.length > count) {
    var newArray = [];
    for (let i = array.length; i > count - 1; i--) {
      newArray.push(array[i]);
    }
    return newArray.reverse();
  } else {
    return array;
  }
}
