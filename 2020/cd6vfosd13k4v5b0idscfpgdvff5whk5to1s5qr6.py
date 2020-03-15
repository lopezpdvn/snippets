from queue import PriorityQueue

class MedianFinder: # custom data structure
  def __init__(self):
    self.lo = PriorityQueue()
    self.hi = PriorityQueue()

  # Time complexity: O(log n)
  def addNum(self, num: int) -> None:
    self.lo.put(-num)
    self.hi.put(-self.lo.get())
    if self.lo.qsize() < self.hi.qsize():
      self.lo.put(-self.hi.get())

  # Return median of all elements so far
  def findMedian(self) -> float:
    return (
      -self.lo.queue[0]                 if
      self.lo.qsize() > self.hi.qsize() else
      (-self.lo.queue[0] + self.hi.queue[0]) / 2.0)
