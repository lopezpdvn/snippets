def DFT(node, stack):
    from collections import deque
    if stack is None: stack = deque()
    if node is not None: stack.append(node)

    while stack:
        node = stack.pop()
        if node.state == State.Visited:
            continue
        yield node
        node.state = State.Visited

        for child in node:
            stack.push(child)
