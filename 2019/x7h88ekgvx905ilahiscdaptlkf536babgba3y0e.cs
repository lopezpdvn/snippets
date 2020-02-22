<Query Kind="Statements">
  <Output>DataGrids</Output>
</Query>

//////////////////////////////////////////////////

// OrderHed one-to-many OrderDtl
// OrderDtl one-to-many OrderRel
// orderIter :: (int, OrderDtl, OrderRel) where
//              int is counter / index &&
//              OrderRel is first
int j = 0;
var orderIter =
  from dtl in GetOrderDtls(OrderHed.OrderNum)
  let i = j++
  let rel = GetOrderRels(OrderHed.OrderNum,
                         dtl.OrderLine)
            .FirstOrDefault()
  select (i, dtl, rel);
