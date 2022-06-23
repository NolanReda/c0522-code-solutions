/* exported titleCase */

// create a new array to hold capitalized words
// split the title into an array
// loop the title array
// create a new variable and assign it the value the current index, check for the following as the loop runs and assign them in turn to the new variable:
// start by capitalizing the first letter of every word in the title array
// check for words that get lower cased by the titleCase rules
// check to always capitalize the first letter of the title array
// hard code the casing for "JavaScript", "JavaScript:", and "API" into to be checked
// add the new variable to the capital letters array as the loop runs
// after the loop runs, join the array, divided by spaces, into a new variable
// split the new string by each charater
// create another empty array
// loop the new split array and check the following:
// if a letter follows a hyphen, capitalize it,
// if a letter follows a colon, capitalize it,
// add all the letters back into the new empty array
// join the new array back together
// return the final joined array

function titleCase(title) {
  var capArray = [];
  var split = title.split(' ');
  for (let i = 0; i < split.length; i++) {
    var cap = split[i].charAt(0).toUpperCase() + split[i].substring(1, split[i].length).toLowerCase();
    if (split[i].toLowerCase() === 'and' || split[i].toLowerCase() === 'or' ||
      split[i].toLowerCase() === 'to' || split[i].toLowerCase() === 'the' || split[i].toLowerCase() === 'of' ||
      split[i].toLowerCase() === 'for' || split[i].toLowerCase() === 'an' ||
      split[i].toLowerCase() === 'in' || split[i].toLowerCase() === 'on') {
      cap = split[i].toLowerCase();
    }
    if (i === 0) {
      cap = split[i].charAt(0).toUpperCase() + split[i].substring(1, split[i].length).toLowerCase();
    }
    if (split[i].toLowerCase() === 'javascript') {
      cap = 'JavaScript';
    } else if (split[i].toLowerCase() === 'javascript:') {
      cap = 'JavaScript:';
    }
    if (split[i].toLowerCase() === 'api') {
      cap = 'API';
    }
    capArray.push(cap);
    var newString = capArray.join(' ');
    var strArr = newString.split('');
    var nextArr = [];
    for (let s = 0; s < strArr.length; s++) {
      var cap2 = strArr[s];
      if (strArr[s - 1] === '-') {
        cap2 = strArr[s].toUpperCase();
      }
      if (strArr[s - 2] === ':') {
        cap2 = strArr[s].toUpperCase();
      }
      nextArr.push(cap2);
    }
    var anotherStr = nextArr.join('');
  }
  return anotherStr;
}
