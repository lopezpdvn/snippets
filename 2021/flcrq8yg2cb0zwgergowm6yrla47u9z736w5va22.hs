import Data.List

alist :: [Int]
alist = [5, -5, -6, 7, 0]

y :: Maybe Int
y = find (==(-6)) alist

main = putStrLn (show y)

-- Just (-6)
