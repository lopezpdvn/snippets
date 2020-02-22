<Query Kind="Statements">
  <Output>DataGrids</Output>
  <Namespace>System</Namespace>
  <Namespace>System.Linq</Namespace>
  <Namespace>System.Text</Namespace>
</Query>

//////////////////////////////////////////////////
// addition with fold
var x = Enumerable.Range(1, 4);
int i = 0, j = 0;

x.Aggregate((a, e) => {i++ ; return a + e;})
 .Dump();
i.Dump();

x.Aggregate(0,
            (a, e) => { j++; return a + e;})
 .Dump();
j.Dump();