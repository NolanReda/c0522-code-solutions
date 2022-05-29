/* exported capitalizeWords */

/* it's the same as the capitalize problem in the last level,
  but you have to split the string into an array by the spaces,
  run a loop over each index,
  capitalize the first character,
  keep the rest of the characters lowercased,
  then join them back together in the return
*/

function capitalizeWords(string) {
  var strArray = string.split(' ');
  for (let i = 0; i < strArray.length; i++) {
    strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].substring(1).toLowerCase();
  }
  return strArray.join(' ');
}
