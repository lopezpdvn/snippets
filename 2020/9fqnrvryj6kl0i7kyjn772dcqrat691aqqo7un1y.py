# f :: String -> [String]

# Write a method to compute all permutations of
# a string of unique characters

def f(s):
    if not s or len(s) < 2:
        yield s
        return

    for sub_perm in f(s[1:]):
        yield from insert_at_all(s[0], sub_perm)

def insert_at_all(c, s):
    yield ''.join((c, s))

    for i in range(1, len(s)):
        yield ''.join((s[:i], c, s[i:]))

    yield ''.join((s, c))

assert (*f(None) ,) == (None,)
assert (*f('')   ,) == (''  ,)
assert (*f('a')  ,) == ('a' ,)
assert (*f('ab') ,) == ('ab', 'ba')
assert (*f('abc'),) == ('abc', 'bac', 'bca',
                        'acb', 'cab', 'cba')
