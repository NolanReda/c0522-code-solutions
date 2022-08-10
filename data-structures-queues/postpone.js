/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  const hold = queue.dequeue();
  return queue.enqueue(hold);
}
