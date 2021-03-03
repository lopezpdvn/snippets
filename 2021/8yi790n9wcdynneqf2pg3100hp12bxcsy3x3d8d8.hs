p = "abc"
q = "def"

-- p × q
x = [[i, j] | i <- p , j <- q]
 
y = show x

main = putStrLn y

-- ["ad","ae","af","bd","be","bf","cd","ce","cf"]
