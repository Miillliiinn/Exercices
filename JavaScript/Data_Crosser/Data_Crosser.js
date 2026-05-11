function collectDataAllAmount(users, orders)
{
  const amounById = {};
  orders.forEach(o => {
    if (amounById[o.userId])
      amounById[o.userId] += o.amount;
    else
      amounById[o.userId] = o.amount;})
      
  const result = users.map(u => {
      return {
        name: u.name,
        total: amounById[u.id] || 0
      };
    });
  return result
}
