/* exported zip */

// create a new array to hold changed data from input array
// create a counter var to track the first array
// loop the second array
// if one array reaches it's length, return the first created array
// as each pair of index's is accessed create a new array and store them in first-second order
// add each new array to the first created array

function zip(first, second) {
  var newArr = [];
  var f = 0;
  for (let i = 0; i < second.length; i++) {
    if (f === first.length || i === second.length) {
      return newArr;
    }
    var yes = [];
    if (i === f) {
      yes.push(first[f]);
      yes.push(second[i]);
      newArr.push(yes);
      f++;
    }
  }
  return newArr;
}
