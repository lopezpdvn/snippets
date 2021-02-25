-- length of x is infinite
x = [3..]

y = ["apple", "orange", "cherry", "mango"]

z = zip x y

main = putStrLn (show z)

-- [(3,"apple"),(4,"orange"),(5,"cherry"),(6,"mango")]
