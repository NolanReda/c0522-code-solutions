/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  const newNode = new LinkedList(value);
  while (list.next !== null) {
    list = list.next;
    if (list.next === null) {
      list.next = newNode;
      return list.print();
    }
  }
}
