def selection_sort(A, n):

    for o in range(n - 1):
        iMin = o
        for i in range(o + 1, n):
            if A[iMin] > A[i]:
                iMin = i

        if iMin != o:
            A[o], A[iMin] = A[iMin], A[o]

x = [5, -1, -3, 0, 7, 2]
print(x)
selection_sort(x, len(x))
print(x)
