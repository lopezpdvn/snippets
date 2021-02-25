maximum' :: (Ord a) => [a] -> a
maximum' [] = error "maximum of empty list"
maximum' [x] = x
maximum' (x:xs)
    | x > maxTail = x
    | otherwise = maxTail
    where maxTail = maximum' xs
    
main = do
    putStrLn (show (maximum' [-10]))
    putStrLn (show (maximum' [-10, 10]))
    putStrLn (show (maximum' [-10, 10, 9]))

-- -10
-- 10
-- 10
