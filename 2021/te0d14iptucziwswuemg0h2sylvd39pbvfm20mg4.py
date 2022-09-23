# Let s be a str of length n. Get the index j of the next char c starting from index i.

# f :: String -> Char -> Int -> Int

# Ex0: abcdebdde -> e -> 7 -> 8
# Ex1: abcdebdde -> c -> 0 -> 2

# This is just linear search, Time O(n), Space O(1)

# If needed to do a lot of times, by growing space to O(nm) where m is cardinality of charset, each lookup can be done in constant time.

def f(s, char_search, istart):
    n = len(s)
    A = [None for i in range(n)]
    chrdict = {}
    for i in range(n - 1, -1, -1):
        char = s[i]
        chrdict[char] = i
        A[i] = {**chrdict}

    return A[istart][char_search]

assert f('abcdebdde', 'e', 7) == 8
assert f('abcdebdde', 'c', 0) == 2
assert f('abcdebdde', 'e', 8) == 8
assert f('abcdebdee', 'e', 7) == 7
