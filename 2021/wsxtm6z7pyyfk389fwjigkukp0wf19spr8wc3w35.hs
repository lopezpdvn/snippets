class YesNo a where
    yesno :: a -> Bool

instance YesNo [a] where
    yesno [] = False
    yesno _ = True

--x :: Bool
x = yesno []

--y :: Bool
y = yesno [-4, 4, 6]
    
main = do
    putStrLn (show x)
    putStrLn (show y)

-- False
-- True
