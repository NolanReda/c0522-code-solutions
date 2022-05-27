/* exported ransomCase */
function ransomCase(string) {
  var newString = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] % 2 === 0) {
      newString.push(string[i].toUpperCase());
    } else newString.push(string[i]);
  }
  newString.join('');
}
