/* exported capitalizeWord */
function capitalizeWord(string) {
  if (string.toLowerCase() === 'javascript') {
    return 'JavaScript';
  } else if (string.charAt(0)) {
    return string.charAt(0).toUpperCase() + string.substring(1, string.length).toLowerCase();
  }
}
