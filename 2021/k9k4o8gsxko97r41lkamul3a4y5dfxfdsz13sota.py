# Explain binary tree In Order depth first
# traversal/search, iterative form algorithm
# (write as static method), DFT, IODFT, BT

def f(p, stack = None):
    if p is None: return

    if stack is None:
        from collections import deque
        stack = deque()

    while stack or p is not None:
        if p is not None:
            stack.append(p)
            p = p.left
        else:
            p = stack.pop()
            yield p
            p = p.right
