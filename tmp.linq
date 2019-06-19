<Query Kind="Statements">
  <Output>DataGrids</Output>
  <Namespace>System</Namespace>
  <Namespace>System.Linq</Namespace>
  <Namespace>System.Text</Namespace>
</Query>

//////////////////////////////////////////////////
var nums = Enumerable.Range(1, 10);
var q =
  from x in nums.Select((e, i) => new { e, i })
  where (x.e % 3 == 0 && x.i >= 5)
  select x.e;

foreach (int number in q)
  q.Dump();