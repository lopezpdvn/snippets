data Shape =
  Circle Float Float Float |
  Rectangle Float Float Float Float
  deriving Show

x = Circle 10 20 10
y = Rectangle 0 0 100 100

main = do
  putStrLn (show x)
  putStrLn (show y)

-- Circle 10.0 20.0 10.0
-- Rectangle 0.0 0.0 100.0 100.0
