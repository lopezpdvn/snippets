<Query Kind="Statements">
  <Output>DataGrids</Output>
  <Namespace>System</Namespace>
  <Namespace>System.Linq</Namespace>
  <Namespace>System.Text</Namespace>
</Query>

//////////////////////////////////////////////////
string[]
  vegetables = { "Tomato", "Cucumber", "Carrot" },
  fruits = { "Apples", "Grapes", "Banana" };
var result = vegetables.Concat(fruits);
foreach (var piece in result)
  piece.Dump();