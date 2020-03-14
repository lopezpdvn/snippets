from queue import PriorityQueue

# Merge k sorted linked lists and return it as
# one sorted list. Time complexity?
class Solution:
  def mergeKLists(self,
          lists: List[ListNode]) -> ListNode:
    # Dummy init node that points to the head of
    # result final singly-linked list
    headAns = ListNode(None);
    i = 0

    q = PriorityQueue()
    for l in lists:
      if l:
        q.put((l.val, i, l))
        i += 1

    node = headAns
    while not q.empty():
      # highest priority node of k nodes
      valMinK, iMinK, nodeMinK = q.get()

      # Append to final list
      node.next = ListNode(valMinK)
      node = node.next

      if nodeMinK.next:
        q.put(
          (nodeMinK.next.val, i, nodeMinK.next))
        i += 1

    return headAns.next

# Time Complexity: O(n log(k)) where n is length
# of output linked list.

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

# Example:
# Input: # [
#   1->4->5,
#   1->3->4,
#   2->6
# ]
# 
# Output: 1->1->2->3->4->4->5->6
