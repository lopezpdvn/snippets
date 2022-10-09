# https://docs.python.org/3/library/itertools.html#itertools-recipes
def grouper(iterable, n, fillvalue=None):
    from itertools import zip_longest
    args = (iter(iterable),) * n
    return zip_longest(*args, fillvalue=fillvalue)

f = lambda iterable, n: (*
  (''.join(x) for x in grouper(iterable, n, '')),)

assert f('ABCDEF', 3) == ('ABC', 'DEF')
assert f('ABCDEF', 2) == ('AB', 'CD', 'EF')
assert f('ABCDEFG', 2) == ('AB', 'CD', 'EF', 'G')
assert f('ABCDEFG', 5) == ('ABCDE', 'FG')
