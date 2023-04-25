def f(AA):
    BB = [[]]
    if not AA:
        return []

    for A in AA:
        if not A:
            return []
        _BB = BB
        BB = [None] * (len(A) * len(_BB))

        i = 0
        for _B in _BB:
            for a in A:
                BB[i] = [*_B, a]
                i += 1

    return BB

x = [[1,2], ['A'], 'xyz']
y = f(x)

for e in y:
    print(e)

# [1, 'A', 'x']
# [1, 'A', 'y']
# [1, 'A', 'z']
# [2, 'A', 'x']
# [2, 'A', 'y']
# [2, 'A', 'z']
