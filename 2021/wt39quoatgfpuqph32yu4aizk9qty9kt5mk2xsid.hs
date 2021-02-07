-- Write Configuration1 in regular syntax
data Configuration0 = Configuration0
    String   -- User name
    String   -- Local host
    String   -- Remote host
    Bool     -- Is guest?
    Bool     -- Is superuser?
    String   -- Current directory
    String   -- Home directory
    Integer  -- Time connected
  deriving (Eq, Show)

-- Write Configuration0 in record syntax
data Configuration1 = Configuration1
    { username      :: String
    , localHost     :: String
    , remoteHost    :: String
    , isGuest       :: Bool
    , isSuperuser   :: Bool
    , currentDir    :: String
    , homeDir       :: String
    , timeConnected :: Integer
    }

main = return ()
