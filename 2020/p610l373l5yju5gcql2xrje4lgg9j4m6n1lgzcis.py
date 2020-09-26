from itertools import product

def get_coordinates(m, n):
  return product(range(m), range(n))

nCols = 3
nRows = 2
y = (*get_coordinates(nRows, nCols),)

print(len(y))
for e in y:
  print(e)

# 6
# (0, 0)
# (0, 1)
# (0, 2)
# (1, 0)
# (1, 1)
# (1, 2)
