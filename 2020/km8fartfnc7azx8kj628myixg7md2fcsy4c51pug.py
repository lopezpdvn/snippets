def f(A, l=None, r=None):
    l = l or 0
    r = r or len(A) - 1
    pivot = A[l + (r - l) // 2]

    while l < r:
        while A[l] < pivot:
            l += 1
        while pivot < A[r]:
            r -= 1

        A[l], A[r] = A[r], A[l]
        l += 1
        r -= 1

    return A, l

assert f([0])[0] == [0]
assert f([0, 0])[0] == [0, 0]
assert f([0, 0, -1])[0] == [-1, 0, 0]
assert f([0, -1, -1])[0] == [-1, -1, 0]
assert f([0, 1])[0] == [0, 1]
assert f([1, 0])[0] == [0, 1]
