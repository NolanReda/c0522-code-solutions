/* exported filterOutStrings */
function filterOutStrings(values) {
  var noStrings = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] === 'number') {
      noStrings.push(values[i]);
    }
  } return noStrings;
}
