# interleave 2 strings

def f(s, t):
    return ''.join(g(s, t))

def g(s, t):
    from itertools import zip_longest
    for x in zip_longest(s, t, fillvalue=''):
        yield ''.join(x)

assert f('', '') == ''
assert f('ab', 'cd') == 'acbd'
assert f('abcd', 'ef') == 'aebfcd'
assert f('ab', '') == 'ab'
assert f('', 'ab') == 'ab'
