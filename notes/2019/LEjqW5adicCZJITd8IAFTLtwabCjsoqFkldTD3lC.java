public void setNext(LinkedListNode n) {
  next = n;
  if (this == last) {
    last = n;
  }
  if (n != null && n.prev != this) {
    n.setPrevious(this);
  }
}
