def bubble_sort(A, n):
    swapped = True
    for o in range(n - 1, 0, -1):
        if not swapped:
            break
        for i in range(o):
            if A[i] > A[i+1]:
                A[i], A[i+1] = A[i+1], A[i]
                swapped = True

x = [3, 1, 0, -1, -2, 4]
print(x)
bubble_sort(x, len(x))
print(x)
