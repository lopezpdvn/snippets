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
        group t by t.amt >= 0 into g
        select g;

foreach (var x in q) {
  $"{(x.Key ? "Positive" : "Negative")}".Dump();
  x.Select(e => e.amt).Sum().Dump();
}

// Positive
// 10
// Negative
// -43