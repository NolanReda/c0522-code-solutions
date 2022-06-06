/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var strArray = string.split('');
  var atfirst = string[firstIndex];
  strArray.splice(firstIndex, 1, strArray[secondIndex]);
  strArray.splice(secondIndex, 1, atfirst);
  return strArray.join('');
}
