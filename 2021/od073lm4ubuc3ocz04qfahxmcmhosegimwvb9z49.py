x = range(1, 6)

from itertools import accumulate
from operator import add
y = (*accumulate(x, add),)

print(y)

# (1, 3, 6, 10, 15)
