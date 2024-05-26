num2char = 'AABCDEFGHIJKLMNOPQRCTUVWXYZ'

def g(C):
    C = C or ''
    if not C:
        yield ''
        return
    if len(C) == 1:
        if C != '0':
            yield num2char[int(C)]
        return
    if 10 <= int(C[-2:]) <= 26:
        for prefix in g(C[:-2]):
            yield prefix + num2char[int(C[-2:])]
    if C[-1] != '0':
        for prefix in g(C[:-1]):
            yield prefix + num2char[int(C[-1])]

f = lambda C: (*g(C),)

assert f('') == (''   ,)
assert f('1') == ('A'  ,)
assert f('0') == ()
assert f('12') == ('L', 'AB')
assert f('22') == ('V', 'BB')
assert f('226') == ('BZ', 'VF', 'BBF')
assert f('111') == ('AK', 'KA', 'AAA')

# A non-empty Ctr containing letterC A-Z iC encoded to numC w/ A->1, B->2, ..., Z->26. Enumerate decodingC.
