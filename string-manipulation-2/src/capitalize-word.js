/* exported capitalizeWord */

/* its the same as the capitalize function from level one but you have to add a
condition to deal with the word "JavaScript" specifically
*/

function capitalizeWord(string) {
  if (string.toLowerCase() === 'javascript') {
    return 'JavaScript';
  } else {
    return string.charAt(0).toUpperCase() + string.substring(1, string.length).toLowerCase();
  }
}
