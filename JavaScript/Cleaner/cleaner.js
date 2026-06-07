function cleanTransactions(transactions)
{
  const valid = transactions.filter(f => f.id && f.amount > 0 && typeof f.amount === "number" && (f.currency === "EUR" || f.currency === "USD"))
  const sortByDate = valid.sort((a, b) => new Date(b.date) - new Date(a.date))
  return sortByDate
}