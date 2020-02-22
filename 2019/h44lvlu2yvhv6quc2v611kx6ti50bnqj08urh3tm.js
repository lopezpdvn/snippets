// Reverse a singly linked list.
const reverseList = head => {
  let prev = null, curr = head;
  while(curr) {
    const nextTmp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTmp;
  }
  return prev;
}
// Complexity Analysis
// Time: O(n)
// Space: O(1)

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// Example:
// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL