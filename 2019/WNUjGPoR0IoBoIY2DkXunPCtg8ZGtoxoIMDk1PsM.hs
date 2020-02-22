module Main (main) where
main :: IO ()

posOrNeg x =
  if x >= 0
  then "Positive"
  else "Negative"

outStr = posOrNeg (-99)

main = putStrLn outStr
