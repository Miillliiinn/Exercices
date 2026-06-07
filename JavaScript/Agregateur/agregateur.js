function calculatePortfolioStats(users)
{
  const actifContracts = users.contracts.filter(f => f.status === "active");
  const total = actifContracts.reduce((acc, cur) =>  acc + cur.monthlyCost , 0)
  
  const investementContracts = users.contracts.filter(f => f.type === "investment")
  
  return {
    totalAnnualCost: total * 12,
    investementContracts: investementContracts
  }
}