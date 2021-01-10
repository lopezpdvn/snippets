<Query Kind="Statements" />

//////////////////////////////////////////////////
var x = new[] { "cat,dog", "fish,bird" };

IEnumerable<string> y =
  x.SelectMany(
    e => e.Split(','));

foreach(string e in y)
  e.Dump();

// cat
// dog
// fish
// bird