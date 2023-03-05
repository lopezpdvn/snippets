class G:
  def topsort(self):
    from collections import deque, Counter
    indeg = Counter()
    for nbors in self.graph.values():
      for nbor in nbors:
        indeg[nbor] += 1
    bftq = deque(node for node in self.graph
                      if not indeg[node])
    _topsort = deque()

    while bftq:
      node = bftq.popleft()
      _topsort.append(node)

      for nbor in self.graph[node]:
        indeg[nbor] -= 1
        if not indeg[nbor]:
          bftq.append(nbor)

    return (_topsort
        if len(_topsort) == len(self.graph)
        else None)
