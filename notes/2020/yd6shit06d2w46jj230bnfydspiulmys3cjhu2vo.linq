<Query Kind="Program" />

// Type pattern matching with switch expression

namespace toll_calculator {
public class TollCalculator {
  public decimal CalcToll(object vehicle) =>
    vehicle switch {
      Car           => 2.00m * c.Passengers,
      Taxi          => 3.50m * t.Fares,
      Bus           => 5.00m,
      DeliveryTruck => 10.00m,
      { } => throw new ArgumentException(
             message: "Unknown vehicle type",
             paramName: nameof(vehicle)),
      null => throw new ArgumentNullException(
              nameof(vehicle))
    };
  }
}

// Compilation error.The type pattern requires
// the variable term in addition to the type term.
//
// CS0119 'Car' is a type, which is not valid in
// the given context