num2char = 'AABCDEFGHIJKLMNOPQRSTUVWXYZ'

def g(s):
    s = s or ''
    n = len(s)
    if not n:
        yield ''
        return
    if n == 1:
        x = int(s[n - 1])
        if x:
            yield num2char[x]
        return
    x = int(s[n - 2:n])
    if 10 <= x <= 26:
        for prefix in g(s[:n-2]):
            yield prefix + num2char[x]
    x = int(s[n - 1])
    if not x:
        return
    for prefix in g(s[:n-1]):
        yield prefix + num2char[x]

f = lambda s: (*g(s),)

assert f('') == (''   ,)
assert f('1') == ('A'  ,)
assert f('0') == ()
assert f('12') == ('L', 'AB')
assert f('22') == ('V', 'BB')
assert f('226') == ('BZ', 'VF', 'BBF')
assert f('111') == ('AK', 'KA', 'AAA')

# A non-empty str containing letters A-Z is encoded to nums w/ A->1, B->2, ..., Z->26. Enumerate decodings.
