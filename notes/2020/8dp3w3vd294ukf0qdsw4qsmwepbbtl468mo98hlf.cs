<Query Kind="Program">
  <Output>DataGrids</Output>
</Query>

//////////////////////////////////////////////////
void Main() {
  Display("Barack"  , "Obama", true ).Dump();
  Display(null      , null   , true ).Dump();
  Display("Michelle", "Obama", true ).Dump();
  Display("Malia"   , "Obama", true ).Dump();
  Display("Fat"     , "Yoshi", false).Dump();
  Display("Sasha"   , "Obama", true ).Dump();
  Display("Barack"  , "Smith", true ).Dump();
}

// Below is called positional pattern matching
// with tuples
static string Display(string first, string last,
                      bool real) =>
                      
  (first, last, real) switch {
    ("Barack"  , "Obama", true ) => "POTUS"      ,
    ("Michelle", "Obama", true ) => "FLOTUS"     ,
    (_         , "Obama", true ) => "Relative"   ,
    ("Barack"  , _      , true ) => "Shares name",
    (var x     , var y  , false) =>
                               $"{x} {y} unreal",
    _                           => "unmatched"
  };

// POTUS
// unmatched
// FLOTUS
// Relative
// Fat Yoshi unreal
// Relative
// Shares name