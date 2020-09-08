from itertools import permutations as f
x = 'abcd'
y = tuple(f(x))
print(len(y))
for e in y:
  print(''.join(e))
print(len(y))

# 24
# abcd
# abdc
# acbd
# acdb
# adbc
# adcb
# bacd
# badc
# bcad
# bcda
# bdac
# bdca
# cabd
# cadb
# cbad
# cbda
# cdab
# cdba
# dabc
# dacb
# dbac
# dbca
# dcab
# dcba
# 24
