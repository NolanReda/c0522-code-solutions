/* exported swapFront */

function swapFront(list) {
  if (list.next === null) {
    return list;
  }
  const head = list.data;
  const next = list.next.data;
  list.data = next;
  list.next.data = head;
  return list;
}
