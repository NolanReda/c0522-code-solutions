/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() !== undefined) {
    const hold = stack.pop();
    if (hold !== undefined) {
      stack.push(value);
    }
    stack.push(hold);
  }
}
