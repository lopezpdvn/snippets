# ctcie6p8.2, Robot in a Grid, recursion, dynamic programming, ctcie6p17.22

def f(grid):
    if grid is None:
        raise Exception()

    from collections import deque
    path = deque()
    g(grid, 0, 0, path)
    return (*path,)

def g(grid, i, j, path):

    m = len(grid)
    n = len(grid[0])

    if i >= m or j >= n or not grid[i][j]:
        return False

    if (    (i == m - 1 and j == n - 1)
         or (g(grid, i    , j + 1, path))
         or (g(grid, i + 1, j    , path))):
        path.appendleft((i, j))
        return True

    return False

x = ((True, True, True, True),
     (True, True, True, True),
     (True, True, True, True),
     (True, True, True, True))
print(f(x))

x = ((True, False, False, False),
     (True, True, False, False),
     (False, True, False, False),
     (False, True, True, True))
print(f(x))

x = ((False, False, False, False),
     (True, True, False, False),
     (False, True, False, False),
     (False, True, True, True))
print(f(x))
