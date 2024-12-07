def merge(A, l, m , r):
    H, hl, hr, i = [*A[l:r+1]], 0, (r-l)//2+1, l

    while hl <= (r-l)//2 and hr < len(H):
        if H[hl] <= H[hr]:
            A[i] = H[hl]
            hl += 1
        else:
            A[i] = H[hr]
            hr += 1
        i += 1

    while hl <= (r-l)//2:
        A[i] = H[hl]
        i += 1
        hl += 1

def mergesort(A, l=None, r=None):
    l = 0 if l is None else l
    r = len(A) - 1 if r is None else r
    if l >= r: return A

    m = l + (r-l) // 2
    mergesort(A, l, m)
    mergesort(A, m + 1, r)
    merge(A, l, m, r)
    return A

tests = [
   [3, 4, 1, 0, 2],
   [],
   [1],
   [1,2,3,4,5,6],
   [9,7,5,3,1],
]

for A in tests:
    assert mergesort(A) == sorted(A)
