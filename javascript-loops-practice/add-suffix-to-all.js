/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var string = [];
  for (let i = 0; i < words.length; i++) {
    string.push(words[i] + suffix);
  } return string;
}
