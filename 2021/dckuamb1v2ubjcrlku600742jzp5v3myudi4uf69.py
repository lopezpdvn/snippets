# Interleave 2 strings, using basic convolution only
#
# f :: String -> String -> String
#
# Ex0: ''     -> ''   -> ''
# Ex1: 'ab'   -> 'cd' -> 'acbd'
# Ex2: 'abcd' -> 'ef' -> 'aebfcd'
# Ex3: 'ab'   -> ''   -> 'ab'
# Ex4: ''     -> 'ab' -> 'ab'

def zip_longest(A, B, fillvalue=None):
  yield from zip(A, B)
  if len(A) == len(B):
    return
  diff = abs(len(A) - len(B))
  longest = A if len(A) > len(B) else B
  yield from (
      (x, fillvalue) for x in longest[-diff:])

g = lambda A, B: (''.join(x)
         for x in zip_longest(A, B, fillvalue=''))

f = lambda A, B: ''.join(g(A, B))

assert f('', '') == ''
assert f('ab', 'cd') == 'acbd'
assert f('abcd', 'ef') == 'aebfcd'
assert f('ab', '') == 'ab'
assert f('', 'ab') == 'ab'
