from collections import deque

def f(n):
    if n < 0:
        raise Exception()

    yield from g(n)

def g(n):
    if not n:
        yield deque()
        return
    if n == 1:
        yield deque((1,))
        return
    for x in g(n - 1):
        x.append(1)
        yield x
    for x in g(n - 2):
        x.append(2)
        yield x

X = range(6)
for x in X:
    y = (*(tuple(path) for path in f(x)),)
    print(y)

# ((),)
# ((1,),)
# ((1, 1), (2,))
# ((1, 1, 1), (2, 1), (1, 2))
# ((1, 1, 1, 1), (2, 1, 1), (1, 2, 1),
#  (1, 1, 2), (2, 2))
# ((1, 1, 1, 1, 1), (2, 1, 1, 1), (1, 2, 1, 1),
#  (1, 1, 2, 1), (2, 2, 1), (1, 1, 1, 2),
#  (2, 1, 2), (1, 2, 2))
