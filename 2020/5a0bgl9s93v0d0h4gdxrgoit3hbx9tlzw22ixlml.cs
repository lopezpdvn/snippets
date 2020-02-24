<Query Kind="Program">
  <Output>DataGrids</Output>
</Query>

void Main() {
  var x = new[] {"2", "4", "6"};
  D d = F;
  d += G;
  foreach(var e in x) d(e).Dump();
}

delegate int D(string x);

int G(string x) {
  "G does not parse".Dump();
  return default;
}

int F(string x) {
  int y = int.Parse(x);
  $"F parsed: `{y}`".Dump();
  return y;
}

// F parsed: `2`
// G does not parse
// 0
// F parsed: `4`
// G does not parse
// 0
// F parsed: `6`
// G does not parse
// 0