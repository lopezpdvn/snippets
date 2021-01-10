<Query Kind="Statements" />

//////////////////////////////////////////////////
var x = new[] { "cat,dog", "fish,bird" };

IEnumerable<string> y =
  from subseq in x
  from e in subseq.Split(',')
  select e;

foreach(string e in y)
  e.Dump();

// cat
// dog
// fish
// bird