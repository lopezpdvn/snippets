# How to build a multiset by hand

class Counter(dict):
    def __getitem__(self, key):
        if key not in self:
            return 0
        return super().__getitem__(key)

    def __setitem__(self, key, value):
        y = super().__setitem__(key, value)
        if value:
            return y
        del self[key]

x = Counter()
assert not len(x)
x['a'] += 1
x['a'] += 2
assert x['a'] == 3
x['b'] += 2
assert x['b'] == 2
x['a'] -= 2
assert x['a'] == 1
assert len(x) == 2
x['a'] -= 1
assert not x['a']
assert len(x) == 1
x['b'] -= 2
assert not x['b']
assert not len(x)
