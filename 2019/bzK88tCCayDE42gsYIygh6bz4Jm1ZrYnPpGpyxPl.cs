<Query Kind="Statements">
  <Output>DataGrids</Output>
  <Namespace>System</Namespace>
  <Namespace>System.Linq</Namespace>
  <Namespace>System.Text</Namespace>
</Query>

//////////////////////////////////////////////////
string[] names = { "Hartono, Tommy",
  "Adams, Terry", "Andersen, Henriette Thaulow",
  "Hedlund, Magnus", "Ito, Shu" };

var index = 20;

string name = names.ElementAtOrDefault(index);

var nameDisplay =
  name ?? "<no name at this index>";

($"Name chosen at index {index} is " +
 $"'{nameDisplay}'.").Dump();