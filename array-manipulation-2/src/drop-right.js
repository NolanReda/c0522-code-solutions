/* exported dropRight */

function dropRight(array, count) {
  if (array.length > count) {
    var newArray = [];
    for (let i = 0; i < count; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  } else {
    return array;
  }
}
