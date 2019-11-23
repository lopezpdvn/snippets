<Query Kind="Statements">
  <Output>DataGrids</Output>
</Query>

//////////////////////////////////////////////////

// OrderHed one-to-many OrderDtl
// OrderDtl on-to-many OrderRel
// orderIter :: new {OrderDtl, OrderRel, i}
                where orderRel is first
                      is i index/counter
var orderIter =
  GetOrderDtls(OrderHed.OrderNum)
  .Select((line, i) => new
  {
    line = line,
    rel = GetOrderRels(OrderHed.OrderNum,
                       line.OrderLine)
          .FirstOrDefault(),
    i = i
  });
