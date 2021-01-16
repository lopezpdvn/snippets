def insertion_sort(A, n):
    if not A:
        return A

    for i in range(1, n):
        for j in range(i, 0, -1):
            if A[j-1] <= A[j]:
                break
            A[j-1], A[j] = A[j], A[j-1]

    return A

x = [6, -1, -2, 0, 5, 3]
print(x)
insertion_sort(x, len(x))
print(x)
