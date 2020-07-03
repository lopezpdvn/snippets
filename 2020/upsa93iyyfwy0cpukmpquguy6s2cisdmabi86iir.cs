<Query Kind="Program">
  <Output>DataGrids</Output>
</Query>

class PStopWatch
{
  private Stopwatch sw;
  internal string Name { get; private set; }
  private Action<string> Log;

  internal PStopWatch(string name, Action<string> Log)
  {
    Name = name;
    this.Log = Log;
    sw = new Stopwatch();
  }

  internal void Start()
  {
    sw.Start();
  }

  internal TimeSpan Stop()
  {
    sw.Stop();
    return sw.Elapsed;
  }

  internal void StopAndLog()
  {
    var elapsed = Stop();
    var msg = $"Name: {Name}, Elapsed: {elapsed.TotalSeconds} s";
    Log(msg);
  }
}

void Main() {}