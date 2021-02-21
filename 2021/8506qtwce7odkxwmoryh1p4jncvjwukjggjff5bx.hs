data Car = Car {
  company :: String,
  model   :: String,
  year    :: Int
  }
  deriving (Show)
  
x :: Car
x = Car {
  company = "Honda",
  model   = "CRV"  ,
  year    = 2012
}

main = putStrLn (show x)

-- Car {company = "Honda", model = "CRV", year = 2012}
