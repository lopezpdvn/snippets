---
layout: page
title: home
---

Let `pow2 n` be 2ⁿ, with simple conditionals

{% highlight haskell %}
module Main (main) where
main ∷ IO ()

pow2 n =
  if n == 0
  then 1
  else 2 * (pow2 (n-1))

outStr = show (pow2 6)

main = putStrLn outStr
{% endhighlight %}

Output

```
64
```
