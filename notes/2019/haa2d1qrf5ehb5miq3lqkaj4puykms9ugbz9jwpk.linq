<Query Kind="Program">
  <Output>DataGrids</Output>
  <Namespace>CommercialRegistration</Namespace>
  <Namespace>ConsumerVehicleRegistration</Namespace>
  <Namespace>LiveryRegistration</Namespace>
  <RemoveNamespace>System.Collections</RemoveNamespace>
  <RemoveNamespace>System.Collections.Generic</RemoveNamespace>
  <RemoveNamespace>System.Data</RemoveNamespace>
  <RemoveNamespace>System.Diagnostics</RemoveNamespace>
  <RemoveNamespace>System.IO</RemoveNamespace>
  <RemoveNamespace>System.Linq</RemoveNamespace>
  <RemoveNamespace>System.Linq.Expressions</RemoveNamespace>
  <RemoveNamespace>System.Reflection</RemoveNamespace>
  <RemoveNamespace>System.Text</RemoveNamespace>
  <RemoveNamespace>System.Text.RegularExpressions</RemoveNamespace>
  <RemoveNamespace>System.Threading</RemoveNamespace>
  <RemoveNamespace>System.Transactions</RemoveNamespace>
  <RemoveNamespace>System.Xml</RemoveNamespace>
  <RemoveNamespace>System.Xml.Linq</RemoveNamespace>
  <RemoveNamespace>System.Xml.XPath</RemoveNamespace>
</Query>

// Type pattern matching with switch expression

namespace toll_calculator
{
  public class TollCalculator
  {
    public decimal CalcToll(object vehicle) =>
      vehicle switch
      {
        Car c => 2.00m * c.Passengers,
        Taxi t => 3.50m * t.Fares,
        Bus b => 5.00m,
        DeliveryTruck t => 10.00m,
        { } => throw new ArgumentException(
               message: "Unknown vehicle type",
               paramName: nameof(vehicle)),
        null => throw new ArgumentNullException(
                nameof(vehicle))
      };
  }
}
