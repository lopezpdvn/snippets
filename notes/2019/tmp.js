// Reverse a singly linked list.
const reverseList = function f(head) {
  if(!head || !head.next) return head;
  const p = f(head.next);
  // Make last non-null node of p point to head.
  head.next.next = head;
  // Now that head is the last non-null node of p
  // make it point to null
  head.next = null;
  return p;
};

// Complexity Analysis
// Time: O(n)
// Space: O(n)

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// Example:
// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL