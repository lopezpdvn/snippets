# Reverse singly-linked list
# n0 → n1 → ... → Ø.

def f(n0):
    if n0 is None or n0.next is None:
        return n0

    n1 = n0.next
    new_head = f(n0.next)
    n1.next = n0
    n0.next = None
    return new_head
