---
layout: page
title: home
---

{% highlight haskell %}
promptLine ∷ String -> IO String
promptLine prompt = do
    putStrLn prompt
    getLine

promptTwoLines ∷ String -> String -> IO String
promptTwoLines prompt1 prompt2 = do
    line1 <- promptLine prompt1
    line2 <- promptLine prompt2
    return (line1 ++ " and " ++ line2)

main ∷ IO ()
main = do
    both <- promptTwoLines
            "First line: " "Second line: "
    putStrLn ("you said " ++ both)
{% endhighlight %}
