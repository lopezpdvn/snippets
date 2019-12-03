<Query Kind="Statements">
  <Output>DataGrids</Output>
</Query>

//////////////////////////////////////////////////
int?  x = 5;
int? y = 1;
int? z = null;

z ??= y++;

x.Dump();
y.Dump();
z.Dump();