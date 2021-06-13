def concatMap(f, x):
    from itertools import chain
    return chain(*map(f, x))

x = ('B,C', 'D,E,F', 'G,H')

y = concatMap(lambda e: e.split(','), x)

print((*y,))

# ('B', 'C', 'D', 'E', 'F', 'G', 'H')
