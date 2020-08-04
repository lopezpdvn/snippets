x = [1, -99]

print(x.pop())

print(x.pop())

print(x.pop())

print(x.pop())

x = [None]

print(x.pop())

print(x.pop())

# -99
# 1
# Traceback (most recent call last):
#   File "tmp.py", line 7, in <module>
#     print(x.pop())
# IndexError: pop from empty list
