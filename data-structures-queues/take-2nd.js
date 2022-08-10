/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() !== undefined) {
    const hold = queue.dequeue();
    if (queue.peek() === undefined) {
      return hold;
    } else {
      queue.enqueue(hold);
      const next = queue.dequeue();
      return next;
    }
  }
}
