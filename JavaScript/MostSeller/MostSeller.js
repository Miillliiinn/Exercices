async function mostSellers()
{
  try 
  {
    // -- Fictive Part
    const [users, sales] = await Promise.all([fetch("https://api.boutique.com/users"), fetch("https://api.boutique.com/sales")])
    if (!users || !sales)
      throw new Error("mostSellers: Promise.all failed");
    const hypothetiqueUsers = await users.json();
    const hypothetiaueSales = await sales.json();
    // --

    
    const userTab = [{ id: 1, name: "Thomas" }, { id: 2, name: "Julie" }];
    const saleTab = [{ userId: 1, amount: 50 }, { userId: 2, amount: 100 }, { userId: 1, amount: 20 }];
    const userSaleTab = {};
    saleTab.forEach(s => {
      const user = userTab.find(u => u.id === s.userId);
      if (user)
      {
        const name = user.name;
        if (userSaleTab[name] === undefined)
        {
          userSaleTab[name] = s.amount;
        }
        else
        {
          userSaleTab[name] += s.amount;
        }
      }
    })
    console.log(userSaleTab)
    let maxAmount = 0;
    let sallerName = "";
    for(i in userSaleTab)
    {
      if (userSaleTab[i] > maxAmount)
      {
        maxAmount = userSaleTab[i];
        sallerName = i;
      }
    }
    console.log(`Le meilleur vendeur est ${sallerName} avec un total de ${maxAmount}€`);
  }
  catch (e)
  {
    console.log("mostSellers: ", e);
  };
}
