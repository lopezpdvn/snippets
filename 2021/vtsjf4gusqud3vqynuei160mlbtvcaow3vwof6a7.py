from collections import Counter

mset = Counter()
mset['a'] += 2
mset['b'] += 3
mset['c'] += 4

print(len(mset)) # output 3

mset['a'] -= 2

print(len(mset)) # output 3
