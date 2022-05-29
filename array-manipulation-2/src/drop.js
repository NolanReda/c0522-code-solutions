/* exported drop */

// it's the same as take but you have to subtract one from the value of the array so the
// value of i will match the endex of the end of the array and reverse the order
// of the return

function drop(array, count) {
  if (array.length > count) {
    var newArray = [];
    for (let i = array.length - 1; i > count - 1; i--) {
      newArray.push(array[i]);
    }
    return newArray.reverse();
  } else {
    return array;
  }
}
