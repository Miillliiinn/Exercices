const users = [
  { id: 1, name: Thomas },
  { id: 2, name: Julie },
  { id: 3, name: Thomas}
];
const orders = [
  { userId: 1, amount: 50 },
  { userId: 1, amount: 20 },
  { userId: 2, amount: 100 },
  { userId: 3, amount: 90}
];

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
