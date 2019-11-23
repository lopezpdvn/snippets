<Query Kind="Statements">
  <Output>DataGrids</Output>
</Query>

//////////////////////////////////////////////////

// OrderHed one-to-many OrderDtl
// OrderDtl one-to-many OrderRel
// orderIter :: (int, OrderDtl, OrderRel) where
//              int is counter / index &&
//              OrderRel is first &&

IEnumerable<(int i, OrderDtl dtl, OrderRel rel)>
orderIter =
  GetOrderDtls(OrderHed.OrderNum)
  .Select((dtl, i) => (i, dtl,
    GetOrderRels(OrderHed.OrderNum,
                 dtl.OrderLine)
      .FirstOrDefault()));
