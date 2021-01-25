head' :: [a] -> a 
head' xs =
  case xs of [] -> error "No head 4 empty lists"
             (x:_) -> x
            
main = putStrLn (show (head' [3,2,5]))

-- 3
