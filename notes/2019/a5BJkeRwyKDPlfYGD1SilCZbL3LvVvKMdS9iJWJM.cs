<Query Kind="Statements">
  <Output>DataGrids</Output>
  <Namespace>System</Namespace>
  <Namespace>System.Linq</Namespace>
  <Namespace>System.Text</Namespace>
</Query>

//////////////////////////////////////////////////
IEnumerable<object> x = new object[] {1, 2, 3};

IEnumerable<object> q = from e in x
                        orderby e descending
                        select e;
                        
IEnumerable<object> p =
  x.Select(e => e)
   .OrderByDescending(e => e);

foreach (IEnumerable<object> r in new[]{q, p} ) {
  foreach (object e in r)
    e.Dump();
  "".Dump();
}