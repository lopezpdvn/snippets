-- Let `nub` be defined in module x, make `nub`
-- and all other functions in x available in
-- current script

import Data.List

numUniques :: (Eq a) => [a] -> Int
numUniques = length . nub

main = return ()
