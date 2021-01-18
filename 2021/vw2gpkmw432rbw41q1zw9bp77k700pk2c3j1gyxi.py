from collections import deque

class Graph:

    def topological_sort():

        inDeg = self.get_in_degrees()
        bftq = deque(node for node, inDeg
                 in enumerate(inDeg) if not inDeg)

        topSort = deque()

        while bftq:
            src = bftq.pop()
            topSort.appendleft(src)

            neighbors = self.get(src, ())
            for neighbor in neighbors:
                inDeg[neighbor] -= 1
                if not inDeg[neighbor]:
                    bftq.appendleft(neighbor)

        return topSort if len(topSort) == self.size else deque()
