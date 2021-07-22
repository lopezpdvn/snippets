newtype CharList =
  CharList { getCharList :: String }
  deriving (Eq, Show)

x = CharList { getCharList = "hello" }

y = CharList "hello"

main = print (x == y)

-- True
