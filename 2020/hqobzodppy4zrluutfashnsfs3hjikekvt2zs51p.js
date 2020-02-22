'use strict'; const log = console.log; (async ()=>{

// Given a linked list, determine if it has a
// cycle in it.
const hasCycle = head => {
  const traversed = new Set();

  while(head) {
    if(traversed.has(head))
      return true
    traversed.add(head);
    head = head.next;
  }

  return false;
};

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Complexity, space = O(n) worst

})();
