compose :: (a -> a) -> (a -> a) -> a -> a
compose f g x = f (g x)

add1 :: Int -> Int
add1 x = x + 1

mult2 :: Int -> Int
mult2 x = 2 * x

y :: Int
y = compose add1 mult2 4

main :: IO ()
main = putStrLn (show y)
