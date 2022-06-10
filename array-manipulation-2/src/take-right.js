/* exported takeRight */

// create a new array
// loop the input array
// once i reaches an index than the count value
// push all remaining indexes into the new array

function takeRight(array, count) {
  var newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i > array.length - count - 1) {
      newArray.push(array[i]);
    }

  }
  return newArray;
}
