<Query Kind="Statements">
  <Output>DataGrids</Output>
  <Namespace>System</Namespace>
  <Namespace>System.Linq</Namespace>
  <Namespace>System.Text</Namespace>
</Query>

//////////////////////////////////////////////////
var A = new SortedSet<int>() { 1, 2 };
var B = new SortedSet<int>() { 3, 4 };

// B × A
var q =
  from b in B
  from a in A
  select new[] { b, a };

foreach (var i in q)
  $"({i.First()}, {i.Last()})".Dump();