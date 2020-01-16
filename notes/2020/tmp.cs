<Query Kind="Program">
  <Output>DataGrids</Output>
</Query>

//////////////////////////////////////////////////
class Point {

  // name of operation:
  // auto implemented properties.
  public double X {get; private set;}   // 1 line
  
  public Point() => X = 2;
}

void Main() {
  var a = new Point();
  
  // x.X = 3;    // compilation error.
  
  a.X.Dump();
}

// 2