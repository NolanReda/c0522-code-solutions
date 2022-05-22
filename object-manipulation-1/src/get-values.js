/* exported getValues */

// create new array to hold all values of given object
// as the function moves through each index
// take the value of each one and put it into the new array

function getValues(object) {
  var values = [];
  for (const property in object) {
    if (object[property]) {
      values.push(object[property]);
    }
  } return values;
}
