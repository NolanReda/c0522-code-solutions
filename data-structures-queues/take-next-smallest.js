/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek !== undefined) {
    while (queue.peek() !== undefined) {
      const hold = queue.dequeue();
      if (queue.peek() === undefined) {
        return hold;
      }
      const next = queue.peek();
      if (hold <= next) {
        return hold;
      } else if (hold > next) {
        queue.enqueue(hold);
      }
    }
  }
}
