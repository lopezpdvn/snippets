# f :: String -> [String]

# Write a method to compute all permutations of
# a string of unique characters

def g(S, k):
    if not k:
        yield ''
        return

    s = S[-k]
    for perm in g(S, k - 1):
        for i in range(len(perm) + 1):
            yield perm[:i] + s + perm[i:]

def f(S):
    S = S or ''
    yield from g(S, len(S))

assert (*f(None) ,) == (''  ,)
assert (*f('')   ,) == (''  ,)
assert (*f('a')  ,) == ('a' ,)
assert (*f('ab') ,) == ('ab', 'ba')
assert (*f('abc'),) == ('abc', 'bac', 'bca',
                        'acb', 'cab', 'cba')

