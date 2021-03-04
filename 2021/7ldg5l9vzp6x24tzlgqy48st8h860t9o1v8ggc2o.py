def BTBFT(p, queue = None):
    if p is None:
        return

    if queue is None:
        from collections import deque
        queue = deque()

    yield p
    queue.appendleft(p)

    while queue:
        p = queue.pop()
        if p.left is not None:
            yield p.left
            queue.appendleft(p.left)
        if p.right is not None:
            yield p.right
            queue.appendleft(p.right)
