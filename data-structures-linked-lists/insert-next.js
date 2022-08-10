/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const newNode = new LinkedList(value);
  const hold = list.next;
  list.next = newNode;
  list.next.next = hold;
}
