<Query Kind="Statements">
  <Output>DataGrids</Output>
  <Namespace>System</Namespace>
  <Namespace>System.Linq</Namespace>
  <Namespace>System.Text</Namespace>
</Query>

//////////////////////////////////////////////////
var A = new SortedSet<int>() { 1, 2 };
var B = new SortedSet<int>();

// A × B
var q = (from a in A
         from b in B
         select new[] { a, b })
        .ToHashSet();

// B × A
var p = (from b in B
         from a in A
         select new[] { b, a })
        .ToHashSet();

var neq = q.SetEquals(p) ? "=" : "≠";
$"A {neq} B".Dump();

neq = q.SequenceEqual(p) ? "=" : "≠";
$"A {neq} B".Dump();

$"|A × B| = {q.Count()}".Dump();
$"|B × A| = {p.Count()}".Dump();