function saleAnalyse(items)
{
    return items.filter(i => i.stock > 0).map(p => p.price * 0.8 * p.stock).reduce((acc, cur) => acc += cur, 0)
}