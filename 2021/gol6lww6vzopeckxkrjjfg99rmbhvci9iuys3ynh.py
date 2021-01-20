def f(A, x):
    if A is None: raise Exception()
    if not A: return -1
    n = len(A)
    L = 0
    R = n - 1

    while L <= R:
        M = L + (R - L) // 2
        if A[M] == x: return M

        if A[0] <= A[-1]:
            if x < A[M]:
                R = M - 1
            else:
                L = M + 1
        else:
            if x > A[M]:
                R = M - 1
            else:
                L = M + 1
    
    return -1

assert f([], 5) == -1
assert f([], 4) == -1
assert f([4,6,10], 10) == 2
assert f([1,2,3,4,5,6,7], 5) == 4
assert f([10,6,4], 10) == 0
assert f([10,6,4], 4) == 2
