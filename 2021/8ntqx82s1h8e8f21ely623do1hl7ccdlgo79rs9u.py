# agnostic binary search

def f(A, x):
  l, r = 0, len(A) - 1

  while l <= r:
    if A[l] == A[r]:
      return l if A[l] == x else -1
    m = l + (r-l)//2
    if A[m] == x:
      if A[m-1] != A[m]:
        return m
      else:
        r = m
        continue
    
    if A[l] < A[r]:
      if A[l] <= x < A[m]:
        r = m - 1
      else:
        l = m + 1
    else:
      if A[l] >= x > A[m]:
        r = m - 1
      else:
        l = m + 1

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
assert f([0,0,1,1,2,2,3,4,4,5,6], 2) == 4
