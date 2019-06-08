---
layout: page
title: home
---

{% highlight haskell %}
divideByTen ∷ (Floating a) => a -> a
divideByTen = (/10)

y = divideByTen 950
main = putStrLn (show y)
{% endhighlight %}

Output

```
95.0
```
