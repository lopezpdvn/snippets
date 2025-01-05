# Interleave 2 strings, using basic convolution only
#
# f :: String -> String -> String
#
# Ex0: ''     -> ''   -> ''
# Ex1: 'ab'   -> 'cd' -> 'acbd'
# Ex2: 'abcd' -> 'ef' -> 'aebfcd'
# Ex3: 'ab'   -> ''   -> 'ab'
# Ex4: ''     -> 'ab' -> 'ab'

def zip_longest(A, B, fillval=None):
  yield from zip(A, B)
  if len(A) == len(B): return
  nremain = abs(len(A) - len(B))
  if len(A) > len(B):
    yield from ((a,fillval) for a in A[-nremain:])
  else:
    yield from ((fillval,b) for b in B[-nremain:])

g = lambda A, B, fillval: (''.join(x)
         for x in zip_longest(A, B, fillval))

f = lambda A, B, fillval='': ''.join(g(A, B, fillval))

assert f('', '') == ''
assert f('ab', 'cd') == 'acbd'
assert f('abcd', 'ef') == 'aebfcd'
assert f('ab', '') == 'ab'
assert f('', 'ab') == 'ab'
assert f('abcd', 'ef') == 'aebfcd'
assert f('abcd', 'ef', 'x') == 'aebfcxdx'
assert f('ef', 'abcd', 'x') == 'eafbxcxd'
