# Is node p an ancestor of node q?
#
# f :: BTNode -> BTNode -> Bool

def f(p, q):
    if is_equal(p, q):
        return True
    return p and (f(p.left, q) or f(p.right, q))

def is_equal(p, q):
    if not p and not q:
        return True
    if not p or not q:
        return False
    return p.value == q.value

def g(a, b):
    if a and not b: return True
    if not a: return not b
    return a.val == b.val or g(a.left, b) or g(a.right, b)

