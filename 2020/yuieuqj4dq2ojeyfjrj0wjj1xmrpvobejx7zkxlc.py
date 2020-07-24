from collections import Counter

x = Counter('abracadabra').most_common(3)

print(x)

# [('a', 5), ('b', 2), ('r', 2)]
