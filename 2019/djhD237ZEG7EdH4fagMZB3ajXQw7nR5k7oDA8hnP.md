---
layout: page
title: home
---

{% highlight haskell %}
pass ∷ a -> (a -> a) -> a
pass x f = f x

pass3 ∷ (Int -> Int) -> Int
pass3 = pass 3

pass47 ∷ (Int -> Int) -> Int
pass47 = pass 47

makeNeg ∷ Int -> Int
makeNeg x = -x

y ∷ Int
y = pass3 makeNeg
z ∷ Int
z = pass47 makeNeg

main ∷ IO ()
main = do
    putStrLn (show y)
    putStrLn (show z)
{% endhighlight %}

Output

```
-3
-47
```
