def cartesian_prod(arrs):
    if arrs is None:
        raise Exception()

    A = [[]]

    for arr in arrs:
        if arr is None:
            raise Exception()

        if not arr:
            return []

        _A = A
        A = [[] for i in range(len(_A) *len(arr))]

        i = 0
        for _a in _A:
            for a in arr:
                A[i] = [*_a, a]
                i += 1

    return A

x = [[1,2], ['A'], ['x', 'y', 'z']]
y = cartesian_prod(x)

for tpl in y:
    print(tpl)

# [1, 'A', 'x']
# [1, 'A', 'y']
# [1, 'A', 'z']
# [2, 'A', 'x']
# [2, 'A', 'y']
# [2, 'A', 'z']
