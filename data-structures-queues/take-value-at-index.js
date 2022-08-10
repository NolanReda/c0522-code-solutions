/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() !== undefined) {
    let count = index;
    while (count > 0) {
      const hold = queue.dequeue();
      queue.enqueue(hold);
      count--;
    }
    const remove = queue.dequeue();
    return remove;
  }
}
