def partition(A, l, r):
    i_pivot = l + (r - l) // 2;
    pivot = A[i_pivot]

    while l <= r:
        while A[l] < A[i_pivot]:
            l += 1
        while A[i_pivot] < A[r]:
            r -= 1

        if l <= r:
            A[l], A[r] = A[r], A[l]

    return l
