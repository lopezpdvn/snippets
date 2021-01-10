def f(n):
    if n <= 0:
        return
    if n == 1:
        yield 1
        return
    for x in f(n // 2):
        yield x
    yield x * 2

assert (*f(-2),) == ()
assert (*f(0) ,) == ()
assert (*f(1) ,) == (1,)
assert (*f(2) ,) == (1, 2)
assert (*f(4) ,) == (1, 2, 4)
assert (*f(5) ,) == (1, 2, 4)
assert (*f(7) ,) == (1, 2, 4)
assert (*f(8) ,) == (1, 2, 4, 8)
