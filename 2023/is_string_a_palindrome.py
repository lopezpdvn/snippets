f = lambda S: (len(S) <= 1 or (
    S[0] == S[-1] and f(S[1:-1])))

assert f('')
assert f('a')
assert not f('ab')
assert f('aba')
assert not f('abab')
assert f('ababa')
