# Write a function that prints the numbers from 1
# to n (inclusive). However, for multiples of 3,
# print "Fizz" instead of the number, and for
# multiples of 5, print "Buzz". For numbers that
# are multiples of both 3 and 5, print "FizzBuzz".

def g(n):
    for i in range(1, n+1):
        is_fizz = not (i % 3)
        is_buzz = not (i % 5)

        if is_fizz and is_buzz:
            yield "FizzBuzz"
        elif is_fizz:
            yield "Fizz"
        elif is_buzz:
            yield "Buzz"
        else:
            yield i

f = lambda n: [*g(n)]

print(f(15))

# [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']

# Time: O(n)
# Space: O(1)
