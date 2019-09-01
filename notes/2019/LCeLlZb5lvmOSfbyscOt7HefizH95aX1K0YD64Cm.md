---
layout: page
title: Note
permalink: /note/
---

{% highlight haskell %}
module Main (main) where
main :: IO ()

posOrNeg x =
  if x >= 0
  then "Positive"
  else "Negative"

outStr = posOrNeg (-99)

main = putStrLn outStr
{% endhighlight %}

Output

```
Negative
```
