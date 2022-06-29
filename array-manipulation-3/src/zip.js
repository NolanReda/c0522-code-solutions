/* exported zip */

// create a new array to hold changed data from input array
// create a variable to repersent the Math.min of both input lengths
// loop both arrays using the math variable
// push an array of both the first and second inputs at i to the new array
// return the array

function zip(first, second) {
  const newArr = [];
  const short = Math.min(first.length, second.length);
  for (let i = 0; i < short; i++) {
    newArr.push([first[i], second[i]]);
  }
  return newArr;
}
