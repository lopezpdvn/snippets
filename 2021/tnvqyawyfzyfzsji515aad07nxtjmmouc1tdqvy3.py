def _reverse(A):
    n = len(A)
    mid = n // 2
    for i in range(mid):
        j = n - i - 1
        A[i], A[j] = A[j], A[i]

B = [1,2,3,4]
_reverse(B)
assert B == [4,3,2,1]
