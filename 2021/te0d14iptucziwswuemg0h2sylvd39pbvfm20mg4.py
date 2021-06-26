# Let s be a str of length n. Get the index j of the next char c starting from index i.

# f :: String -> Char -> Int -> Int

# Ex0: abcdebdde -> e -> 7 -> 8
# Ex1: abcdebdde -> c -> 0 -> 2

# This is just linear search, Time O(n), Space O(1)

# If needed to do a lot of times, by growing space to O(nm) where m is cardinality of charset, each lookup can be done in constant time.

def f(s, c, i):
  n = len(s)
  nxt = [None for i in range(n)]
  last = [-1 for i in range(26)] #cardnlty charset

  for k in range(n-1, -1, -1):
    last[ord(s[k]) - ord('a')] = k
    nxt[k] = tuple(last)

  return nxt[i][ord(c) - ord('a')]

assert f('abcdebdde', 'e', 7) == 8
assert f('abcdebdde', 'c', 0) == 2
assert f('abcdebdde', 'e', 8) == 8
assert f('abcdebdee', 'e', 7) == 7
