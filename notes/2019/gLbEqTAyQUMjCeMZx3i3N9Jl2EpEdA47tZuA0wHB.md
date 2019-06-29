---
layout: page
title: home
---

Write a multi-line comment at the top of the code excerpt.

{% highlight haskell %}
{-
   This is a
   multi-line
   comment.
-}

divideByTen :: Floating a => a -> a
divideByTen = (/10)

y = divideByTen 950
main = putStrLn (show y)
{% endhighlight %}

Output

```
95.0
```
