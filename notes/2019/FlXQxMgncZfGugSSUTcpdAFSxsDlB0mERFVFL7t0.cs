<Query Kind="Statements">
  <Output>DataGrids</Output>
  <Namespace>System</Namespace>
  <Namespace>System.Linq</Namespace>
  <Namespace>System.Text</Namespace>
</Query>

//////////////////////////////////////////////////
string[] names = { "Bob", "Ned", "Amy", "Bill" };
var result = names.Any(n => n.StartsWith("B"));
result.Dump();