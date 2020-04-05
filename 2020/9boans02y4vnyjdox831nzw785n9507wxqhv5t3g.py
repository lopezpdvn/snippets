seq0 = ('a', 'abc', ('a', 'b', 'c'), 'd',
        (('a', 'b'), ('c', 'd')), 'e')

seq1 = ('a', 'abc', ('a', 'b', 'c'), 'd',
        (('a', 'b'), ('c', 'd')), 'e')

print(seq0 is seq1)

print(seq1 is seq1)

# True
# True
