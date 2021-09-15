x = 'abc'

# ord takes exactly 1 arg
y = (*(ord(e) for e in x),)

assert y == (97, 98, 99)
