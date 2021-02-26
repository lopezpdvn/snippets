data Car = Car {
  company :: String,
  model   :: String,
  year    :: Int
}
  
x = Car {
  company = "Honda",
  model   = "CRV"  ,
  year    = 2012
}
  
x_model = model x
x_year  = year x
x_display =    "Model: " ++ x_model
            ++ ", Year: " ++ (show x_year)

main = putStrLn (show x_display)

-- "Model: CRV, Year: 2012"
