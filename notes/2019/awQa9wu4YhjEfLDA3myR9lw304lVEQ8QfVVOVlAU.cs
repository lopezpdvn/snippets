<Query Kind="Program">
  <Output>DataGrids</Output>
  <Namespace>System</Namespace>
  <Namespace>System.Linq</Namespace>
  <Namespace>System.Text</Namespace>
</Query>

//////////////////////////////////////////////////
void Main() {
  var A = new SortedSet<int>() {1, 2};
  var B = new SortedSet<int>(A);

  // A × B
  var q = (from a in A
           from b in B
           select new[] {a, b})
          .ToHashSet(new IntSeqEqCmp());
  // B × A
  var p = (from b in B
           from a in A
           select new[] { b, a })
          .ToHashSet(new IntSeqEqCmp());
  
  q.SetEquals(p).Dump();
  foreach (var x in new[] { q, p }) {
    var pairs = string.Join(", ",
      x.Select(y=> $"({y.First()}, {y.Last()})"));
    $"{{{pairs}}}".Dump();
  }
}

// EqualityComparer<t> : IEqualityComparer<T>
class IntSeqEqCmp
  : EqualityComparer<IEnumerable<int>>
{
  public override bool Equals(
    IEnumerable<int> x, IEnumerable<int> y)
      => x.SequenceEqual(y);

  public override int GetHashCode(
    IEnumerable<int> obj)
      => obj.Sum(x => x.GetHashCode());
}
