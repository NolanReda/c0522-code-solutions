/* exported tail */
function tail(array) {
  var newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== 0) {
      newArray.push(array[i]);
    }
  } return newArray;
}
