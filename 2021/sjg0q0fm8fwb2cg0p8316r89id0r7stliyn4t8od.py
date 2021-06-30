x = [*'abcde']

x[1:3] = 'XYZ'

assert ''.join(x) == 'aXYZde'
