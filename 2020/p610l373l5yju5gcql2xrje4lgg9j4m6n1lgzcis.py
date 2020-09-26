from itertools import product

def get_coordinates(m, n):
  return product(range(m), range(n))

w = 3
h = 2
y = (*product(range(h), range(w)),)

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
