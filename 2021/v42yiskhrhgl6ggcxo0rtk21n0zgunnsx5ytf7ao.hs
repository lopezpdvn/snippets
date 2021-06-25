x :: Maybe String
x =     Just 3
    >>= \x ->     Just "!"
              >>= \y -> Just (show x ++ y)

main = print x

-- Just "3!"
