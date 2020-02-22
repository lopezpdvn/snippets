---
layout: page
title: Note
permalink: /note/
---

{% highlight haskell %}
removeOdd :: [Int] -> [Int]
removeOdd [] = []
removeOdd (x : xs)
  | mod x 2 == 0 = x : (removeOdd xs)
  | otherwise    = removeOdd xs

x = [0, 1, 2, 3, 4, 5]
y = [0, 2, 4, 6, 8, 10]

-- Define numEven using `where` w/ type annotation
numEven :: [Int] -> Int
numEven nums =
  length evenNums
  where evenNums = removeOdd nums 

main = do
    putStrLn (show (numEven x))
    putStrLn (show (numEven y))
{% endhighlight %}

Output

```
3
6
```
