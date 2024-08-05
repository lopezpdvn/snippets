# trickledown
def f(A, i, count):
  while 2*i + 1 < count:
    max_child = 2*i + 1

    if (   max_child + 1 < count
       and A[max_child] < A[max_child+1]):
      max_child += 1

    if A[i] >= A[max_child]: break

    A[i], A[max_child] = A[max_child], A[i]
    i = max_child

  return i
