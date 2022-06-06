/* exported truncate */
function truncate(length, string) {
  if (string.length >= length) {
    return string.slice(0, length) + '...';
  } else {
    return string + '...';
  }
}
