> Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

# Brute force solution

Loop through each element `x` and find if there is another value that equals to `target - x`.

## Complexity Analysis

1. Time complexity : O(n^2)
1. Space complexity : O(1)