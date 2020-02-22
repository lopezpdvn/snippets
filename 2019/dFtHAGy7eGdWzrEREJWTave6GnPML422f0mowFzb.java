public void setPrevious(LinkedListNode p) {
  prev = p;
  if (p != null && p.next != this) {
    p.setNext(this);
  }
}
