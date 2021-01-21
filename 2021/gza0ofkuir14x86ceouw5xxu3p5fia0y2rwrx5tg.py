class BTNode:
    def __init__(self, val = None, left = None,
                 right = None):
        self.val = val
        self.left = left
        self.right = right

def f(p, q):
    if p is None and q is None: return True
    if p is None or q is None: return False

    return (    p.val == q.val
            and f(p.left, q.left)
            and f(p.right, q.right)
