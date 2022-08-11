/* exported removeTail */

function removeTail(list) {
  if (list.next === null) {
    return list;
  }
  while (list.next.next !== null) {
    list = list.next;
    if (list.next.next === null) {
      return list;
    }
  }
}
