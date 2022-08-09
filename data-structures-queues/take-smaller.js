/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() !== undefined) {
    const hold = queue.dequeue();
    if (queue.peek() === undefined) {
      return hold;
    }
    const next = queue.dequeue();
    if (hold < next) {
      queue.enqueue(next);
      return hold;
    } else if (hold === next) {
      queue.enqueue(next);
      return hold;
    } else if (hold > next) {
      queue.enqueue(hold);
      return next;
    }
  }
}
