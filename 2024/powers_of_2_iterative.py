# Generate pows of 2 from 1 to n inclusive.

def f(n):
    i = 1
    if n < i: return
    while i <= n:
        yield i
        i *= 2

g = lambda x: [*f(x)]

assert g(7) == [1,2,4]
assert g(8) == [1,2,4,8]

# Time complexity: O(logn)
# Space complexity: O(1)
