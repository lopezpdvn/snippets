def f(p):
    if not p:
        return p

    if not p.parent or p.right:
        return getLeftMost(p.right)

    ancs = p.parent
    desc = p
    while ancs and ancs.left != desc:
        desc = ancs
        ancs = ancs.parent

    return ancs

def getLeftMost(p):
    if not p:
        return p

    while p.left:
        p = p.left

    return p
