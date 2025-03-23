def merge(A, l, m, r):
    H = A[l : r + 1]
    ai, hm = l, (len(H)-1)//2
    hl, hr = 0, hm + 1

    while hl <= hm and hr <= len(H)-1:
        if H[hl] <= H[hr]:
            A[ai] = H[hl]
            hl += 1
        else:
            A[ai] = H[hr]
            hr += 1
        ai += 1

    A[ai : ai + (hm-hl)+1] = H[hl : hm+1]

    return A

def mergesort(A, l=None, r=None):
    l = 0 if l is None else l
    r = len(A) - 1 if r is None else r
    if l >= r: return A
    m = l + (r - l) // 2
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
