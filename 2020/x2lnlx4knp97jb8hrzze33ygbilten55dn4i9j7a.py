# Let A & B be asc sorted [Int] each. Get k
# (a, b) with smallest a + b, where a ∈ A and
# b ∈ B. Examples:
# 
# [1,7,11] -> [2,4,6] -> 3 -> [(1,2), (1,4),(1,6)]
# [1,1,2]  -> [1,2,3] -> 2 -> [(1,1), (1,1)]
# [1, 2]   -> [3]     -> 3 -> [(1,3), (2,3)]
# 
# f ∷ [Int] -> [Int] -> Int -> [(Int, Int)]

from queue import PriorityQueue

def f(A, B, k):
  minHeap = PriorityQueue()
  i = 0

  for a in A:
    for b in B:
      minHeap.put((a + b, i, (a, b)))
      i += 1

  return [minHeap.get()[2] for i in range(k)
                           if minHeap.qsize()]

# time: O(|A| * |B| * log k)
# space: O(|A| * |B|)

print(f([1, 7, 11], [2, 4, 6], 3))
print(f([1, 1, 2], [1, 2, 3], 2))
print(f([1, 2], [3], 3))

# [(1, 2), (1, 4), (1, 6)]
# [(1, 1), (1, 1)]
# [(1, 3), (2, 3)]
