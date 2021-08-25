from collections import deque

# indeces  0123456789
x = deque('ETYUNFTFGH')

n = len(x)

# last index of value 'T', or None
y = next((i for i in range(n - 1, -1, -1)
            if x[i] == 'T'),
        None)

print(y)
# 6
