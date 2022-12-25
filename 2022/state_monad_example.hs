-- The State monad is a monad that allows you to carry around a state in a
-- computation. It's often used when you need to perform some computation that
-- involves keeping track of some piece of state, and you want to do so in a way
-- that is composable and easy to understand.

-- Here's an example of how you might use the State monad in Haskell to
-- implement a simple program that increments a counter:

import Control.Monad.State

-- Define a type alias for our state, which will be an Int
type CounterState = State Int

-- Define a function that increments the counter by 1
incrementCounter :: CounterState ()
incrementCounter = do
  count <- get
  put (count + 1)

-- Now we can use our stateful functions like this:
main :: IO ()
main = do
  let (result, finalState) = runState (do
                                         incrementCounter
                                         incrementCounter
                                         get
                                       ) 0
  print result  -- prints 2
  print finalState  -- prints 2

-- In this example, the CounterState type alias represents a stateful
-- computation that carries around an Int state. The incrementCounter function
-- increments the counter by one, and the getCounter function gets the current
-- value of the counter. The runCounter function runs a sequence of stateful
-- actions, starting with an initial state, and returns the final state as well
-- as the result of the computation.

-- In the main function, we use runCounter to run a sequence of stateful actions
-- that increments the counter twice and then gets the final value of the
-- counter. The result of the computation is 2, and the final state is also 2.
