/* exported includes */

function includes(array, value) {
  if (array.length === 0) {
    return false;
  } else {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        return true;
      } else if (i >= array.length - 1) {
        return false;
      }
    }
  }
}
