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
    yield from (''.join(x) for x in zip(s, t))
    slen = len(s)
    tlen = len(t)
    if slen == tlen:
        return
    nremain = abs(slen - tlen)
    str_remain = s if slen > tlen else t
    yield str_remain[-nremain:]

assert f('', '') == ''
assert f('ab', 'cd') == 'acbd'
assert f('abcd', 'ef') == 'aebfcd'
assert f('ab', '') == 'ab'
assert f('', 'ab') == 'ab'
