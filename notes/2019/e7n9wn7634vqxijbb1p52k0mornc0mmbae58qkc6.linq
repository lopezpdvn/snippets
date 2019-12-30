<Query Kind="Program">
  <Output>DataGrids</Output>
</Query>

//////////////////////////////////////////////////
class Point {
  public int X { get; }
  public int Y { get; }
  public Point(int x, int y) => (X, Y) = (x, y);
}
void Main() {
  Display(new Point(0, 0)).Dump();
  Display(new Point(1, 0)).Dump();
  Display(       2       ).Dump();
}

static string Display(object o) => o switch {
  Point p when p.X == 0 && p.Y == 0 => "origin",
  Point p => $"({p.X}, {p.Y})",
  _ => "unknown"
};

// Output
// origin
// (1, 0)
// unknown
