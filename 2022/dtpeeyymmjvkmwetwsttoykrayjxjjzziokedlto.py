# Subarrays/substrings of argument
def get_subsequences(s):
    if s is None:
        s = ()
    n = len(s)
    yield s[0:0]
    for i in range(n):
        for j in range(i + 1, n + 1):
            yield s[i:j]

g = lambda s: (*get_subsequences(s),)

assert g('') == ('',)
assert g('a') == ('', 'a')
assert g('abcd') == ('', 'a', 'ab', 'abc',
        'abcd', 'b', 'bc', 'bcd', 'c', 'cd', 'd')
