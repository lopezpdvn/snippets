# Interleave 2 strings, using basic convolution only
#
# f :: String -> String -> String
#
# Ex0: ''     -> ''   -> ''
# Ex1: 'ab'   -> 'cd' -> 'acbd'
# Ex2: 'abcd' -> 'ef' -> 'aebfcd'
# Ex3: 'ab'   -> ''   -> 'ab'
# Ex4: ''     -> 'ab' -> 'ab'

def g(a, b):
    a_len = len(a)
    b_len = len(b)
    yield from (x + y for x, y in zip(a, b))
    if a_len == b_len: return
    seq_longest = a if a_len > b_len else b
    n_remain = abs(a_len - b_len)
    yield seq_longest[-n_remain:]

f = lambda a, b: ''.join(g(a, b))

assert f('', '') == ''
assert f('ab', 'cd') == 'acbd'
assert f('abcd', 'ef') == 'aebfcd'
assert f('ab', '') == 'ab'
assert f('', 'ab') == 'ab'
