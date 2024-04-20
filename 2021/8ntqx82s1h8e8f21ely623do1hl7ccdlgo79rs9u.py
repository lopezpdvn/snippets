# agnostic binary search

def f(A, x):
    A, l, r = A or (), 0, len(A) - 1
    if not A: return -1

    while l <= r:
        m = l + (r - l) // 2
        if A[l] == A[r]:
            return l if A[l] == x else -1

        if A[m] == x: return m
        while l < m and A[l] == A[m]: l += 1
        while m < r and A[m] == A[r]: r -= 1

        if A[l] < A[r]:
            if A[l] <= x < A[m]: r = m - 1
            else:                l = m + 1
        else:
            if A[l] >= x > A[m]: r = m - 1
            else:                l = m + 1

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
