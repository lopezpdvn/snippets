# Interleave 2 strings, using basic convolution only
# 
# f :: String -> String -> String
# 
# Ex0: ''     -> ''   -> ''
# Ex1: 'ab'   -> 'cd' -> 'acbd'
# Ex2: 'abcd' -> 'ef' -> 'aebfcd'
# Ex3: 'ab'   -> ''   -> 'ab'
# Ex4: ''     -> 'ab' -> 'ab'

def f(s, t):
    return ''.join(g(s, t))

def g(s, t):
    if len(s) >= len(t):
        large = s
        small = t
    else:
        small = s
        large = t

    for x in zip(s, t):
        yield ''.join(x)

    len_diff = len(large) - len(small)
    if not len_diff:
        return

    yield large[-len_diff:]

assert f('', '') == ''
assert f('ab', 'cd') == 'acbd'
assert f('abcd', 'ef') == 'aebfcd'
assert f('ab', '') == 'ab'
assert f('', 'ab') == 'ab'
