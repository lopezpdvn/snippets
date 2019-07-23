<Query Kind="Statements">
  <Output>DataGrids</Output>
  <Namespace>System</Namespace>
  <Namespace>System.Linq</Namespace>
  <Namespace>System.Text</Namespace>
</Query>

//////////////////////////////////////////////////
int[] x = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

// Query syntax
var result0 =
  from n in x.Select((e, i) => (e, i))
  where (n.e % 3 == 0 && n.i >= 5)
  select n.e;

foreach (var number in result0)
  number.Dump();

string.Empty.Dump();

// Method syntax
var result1 =
  x.Where((e, i) => e % 3 == 0 && i >= 5);

foreach (var number in result0)
  number.Dump();