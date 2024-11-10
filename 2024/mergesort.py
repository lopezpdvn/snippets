def _mergesort(A, l, r):
    if l >= r: return A
    m = l + (r - l) // 2
    _mergesort(A, l, m)
    _mergesort(A, m + 1, r)
    merge(A, l, m, r)
    return A

def merge(A, l, m, r):
    H, hl, hr, i = [*A], l, m + 1, l

    while hl <= m and hr <= r:
        if H[hl] <= H[hr]:
            A[i] = H[hl]
            hl += 1
        else:
            A[i] = H[hr]
            hr += 1
        i += 1

    while hl <= m:
        A[i] = H[hl]
        i += 1
        hl += 1

def mergesort(A):
    return _mergesort(A, 0, len(A) - 1)

tests = [
   [3, 4, 1, 0, 2],
   [],
   [1],
   [1,2,3,4,5,6],
   [9,7,5,3,1],
]

for A in tests:
    assert mergesort(A) == sorted(A)
