<Query Kind="Statements" />

//////////////////////////////////////////////////
(DayOfWeek day, double amt)[] trans = new[]  {
  (DayOfWeek.Monday   ,  3d   ),
  (DayOfWeek.Tuesday  , -1d   ),
  (DayOfWeek.Wednesday, -19d  ),
  (DayOfWeek.Thursday , 7d    ),
  (DayOfWeek.Friday   , 0d    ),
  (DayOfWeek.Saturday , -110d ),
  (DayOfWeek.Sunday   , -23d  ),             };

var q = from t in trans
        where Math.Abs(t.amt) <= 100d
        orderby t.amt descending, t.day
        group t by t.amt >= 0 into g
        select g;

foreach (var x in q) {
  var sign = x.Key ? "Positive" : "Negative";
  var total = x.Select(e => e.amt).Sum();
  $"{sign} total: {total}".Dump();
  foreach(var t in x)
    $"{t.day}: {t.amt}".Dump();
}

// Positive total: 10
// Thursday: 7
// Monday: 3
// Friday: 0
// Negative total: -43
// Tuesday: -1
// Wednesday: -19
// Sunday: -23