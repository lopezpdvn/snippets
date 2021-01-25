-- 64 / 4 / 2 / 1 == 8, with HOF fold & seed

x = foldl (/) 64 [4,2,1]

main = putStrLn (show x)

-- 8.0
