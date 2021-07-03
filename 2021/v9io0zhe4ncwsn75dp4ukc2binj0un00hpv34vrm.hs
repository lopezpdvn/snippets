wopwop :: Maybe Char
wopwop = do
    (x:xs) <- Just "hello"
    return x

main = print wopwop

-- Just 'h'
