x = [1..5]

y = scanl1 (+) x

main = putStrLn (show y)

-- [1,3,6,10,15]
