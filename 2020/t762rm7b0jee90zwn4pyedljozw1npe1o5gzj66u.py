# In a nRows x nCols matrix 2 elements will be
# nullified. Iterate all the possible choices of
# elements to be nullified.

from itertools import product, combinations

def get_coordinates(m, n):
  return product(range(m), range(n))

nCols = 3
nRows = 2
nNulls = 2
y = (*get_coordinates(nRows, nCols),)
z = (*combinations(y, 2),)

print(len(z))
for e in z:
    print(', '.join(map(str, e)))

# 15
# (0, 0), (0, 1)
# (0, 0), (0, 2)
# (0, 0), (1, 0)
# (0, 0), (1, 1)
# (0, 0), (1, 2)
# (0, 1), (0, 2)
# (0, 1), (1, 0)
# (0, 1), (1, 1)
# (0, 1), (1, 2)
# (0, 2), (1, 0)
# (0, 2), (1, 1)
# (0, 2), (1, 2)
# (1, 0), (1, 1)
# (1, 0), (1, 2)
# (1, 1), (1, 2)
