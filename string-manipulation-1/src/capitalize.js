/* exported capitalize */

// create function to capitalize first character of a given string.
// if in the first place, change it to capital and add to new string
// change all other characters in string to be lower case
// give back the string in it's new form

function capitalize(string) {
  if (string.charAt(0)) {
    return string.charAt(0).toUpperCase() + string.substring(1, string.length).toLowerCase();
  }
}
