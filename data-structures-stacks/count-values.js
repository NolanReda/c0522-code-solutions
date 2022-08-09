/* exported countValues */

function countValues(stack) {
  let n = 0;
  while (typeof stack.pop() !== 'undefined') {
    n++;
  }
  return n;
}
