/* exported capitalize */

// create function to capitalize first character of a given string.
// change the first character to capital and add to new string
// change all other characters in string to be lower case
// give back the string in it's new form

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.substring(1, string.length).toLowerCase();
}
