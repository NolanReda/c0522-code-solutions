/* exported take */

// check if array is longer than the count value. If so:

// create a new array to contain the items up to my count
// check each index of the array up to my count point and stop
// push those things from my count point into the new array

// if not, just return the original array

// if the input is more than the count
// create a new array
// search the input until reaching the index equal to the count value
// put indexes up to that point into the new array and return it

function take(array, count) {
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
