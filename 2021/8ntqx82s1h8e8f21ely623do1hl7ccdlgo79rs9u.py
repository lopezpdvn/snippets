# agnostic binary search

def f(A, x):
    L, R = 0, len(A) - 1
    while L <= R:
        if L == R or A[L] == A[R]:
            return L if A[L] == x else -1
        M = L + (R - L) // 2
        if x == A[M]: return M
        if A[L] < A[R]:
            if x < A[M]: R = M - 1
            else:        L = M + 1
        else:
            if x > A[M]: R = M - 1
            else:        L = M + 1
    return -1

assert f([], 5) == -1
assert f([], 4) == -1
assert f([3], 3) == 0
assert f([4], 3) == -1
assert f([4,6,10], 10) == 2
assert f([1,2,3,4,5,6,7], 5) == 4
assert f([1,1,1,1,5,6,7], 5) == 4
assert f([1,2,3,4,4,4,4], 2) == 1
assert f([10,6,4], 10) == 0
assert f([10,6,4], 4) == 2
assert f([2,2,2], 4) == -1
assert f([2,2,2], 2) == 0
