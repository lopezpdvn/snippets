data Shape =
  Circle Float Float Float |
  Rectangle Float Float Float Float
  deriving Show

surface ∷ Shape -> Float 
surface (Circle _ _ r) = pi * r ^ 2
surface (Rectangle x1 y1 x2 y2) =
  (abs $ x2 - x1) * (abs $ y2 - y1)

circleSurface :: Float
circleSurface = surface $ Circle 10 20 10

rectSurface:: Float
rectSurface= surface $ Rectangle 0 0 100 100

main = do
  putStrLn (show circleSurface)
  putStrLn (show rectSurface)

-- 314.15927
-- 10000.0
