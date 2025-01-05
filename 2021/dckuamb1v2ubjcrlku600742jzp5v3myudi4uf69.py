# Interleave 2 strings, using basic convolution only
#
# f :: String -> String -> String
#
# Ex0: ''     -> ''   -> ''
# Ex1: 'ab'   -> 'cd' -> 'acbd'
# Ex2: 'abcd' -> 'ef' -> 'aebfcd'
# Ex3: 'ab'   -> ''   -> 'ab'
# Ex4: ''     -> 'ab' -> 'ab'

def zip_longest(A, B, fillv=None):
  yield from zip(A, B)
  if len(A) == len(B): return
  nremain = abs(len(A) - len(B))
  if len(A) > len(B):
    yield from ((a,fillv) for a in A[-nremain:])
  else:
    yield from ((fillv,b) for b in B[-nremain:])

g = lambda A, B, fillv: (''.join(x)
         for x in zip_longest(A, B, fillv))

f = lambda A, B, fillv='': ''.join(g(A, B, fillv))

assert f('', '') == ''
assert f('ab', 'cd') == 'acbd'
assert f('abcd', 'ef') == 'aebfcd'
assert f('ab', '') == 'ab'
assert f('', 'ab') == 'ab'
assert f('abcd', 'ef') == 'aebfcd'
assert f('abcd', 'ef', 'x') == 'aebfcxdx'
assert f('ef', 'abcd', 'x') == 'eafbxcxd'
