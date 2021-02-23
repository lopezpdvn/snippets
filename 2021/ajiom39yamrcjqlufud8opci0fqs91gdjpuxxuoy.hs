data Vector a =
  Vector a a a
  deriving (Show)
  
vplus :: (Num t) =>
         Vector t -> Vector t -> Vector t
(Vector i j k) `vplus` (Vector l m n) =
  Vector (i+l) (j+m) (k+n)

x :: Vector Int
x = Vector 3 5 8 `vplus` Vector 9 2 8

main = putStrLn (show x)

-- Vector 12 7 16
