x = (97, 98, 99)

y = ''.join(chr(e) for e in x)

assert y == 'abc'
