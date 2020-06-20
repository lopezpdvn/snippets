# Example of n-tuples of array/string

from itertools import product

x = 'aa'
m = len(x)
n = 3

y = tuple(product(x, repeat=n))

print('|y| = {0}'.format(len(y)), end='\n\n')

for tpl in y:
  print(''.join(tpl))

# |y| = 8
# 
# aaa
# aaa
# aaa
# aaa
# aaa
# aaa
# aaa
# aaa
