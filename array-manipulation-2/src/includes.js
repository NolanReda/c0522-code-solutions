/* exported includes */

function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    } else if (array[i] !== value) {
      continue;
    } else {
      return false;
    }
  }
}
