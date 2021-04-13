x = [*'abcde']

x[2:2] = [*'XYZ']

assert ''.join(x) == 'abXYZcde'
