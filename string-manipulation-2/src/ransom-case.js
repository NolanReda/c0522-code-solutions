/* exported ransomCase */
function ransomCase(string) {
  var newString = [];
  for (let i = 0; i < string.length; i++) {
    if ((i + 1) % 2 === 0) {
      newString.push(string[i].toUpperCase());
    } else if ((i + 1) % 2 !== 0) {
      newString.push(string[i].toLowerCase());
    }
  }
  return newString.join('');
}
