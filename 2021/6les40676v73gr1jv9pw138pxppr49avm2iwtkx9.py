def f(A, x):

    if A is None:
        raise Exception()

    n = len(A)

    if n == 1:
        return 0 if A[0] == x else -1

    return g(A, x, 0, n - 1)

def g(A, x, L, R):
    if L > R:
        return -1

    M = L + (R - L) // 2

    if x == A[M]:
        return M

    if A[0] < A[-1]:
        if A[L] <= x < A[M]:
            return g(A, x, L, M - 1)
        else:
            return g(A, x, M + 1, R)
    elif A[0] > A[-1]:
        if A[L] >= x > A[M]:
            return g(A, x, L, M - 1)
        else:
            return g(A, x, M + 1, R)
    else:
        return -1

assert f([], 5) == -1
assert f([], 4) == -1
assert f([4,6,10], 10) == 2
assert f([1,2,3,4,5,6,7], 5) == 4
assert f([10,6,4], 10) == 0
assert f([10,6,4], 4) == 2
assert f([2,2,2,2], 4) == -1
