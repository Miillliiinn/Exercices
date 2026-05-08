async function getTotalValue()
{
    // Fictive part
    try
    {
        const [wallet, price] = await Promise.all([fetch(https://api.crypto.com/my-walletFormat), fetch(https://api.crypto.com/pricesFormat)]);
        {
            throw new Error(getTotalValue: error promise all);
        }
        let wallets = await wallet.json();
        let prices = await price.json();

    }
    catch (e)
    {
        console.log(getTotalValue: , e);
    }
    //
    wallets = [{ coin: BTC, quantity: 0.5 }, { coin: ETH, quantity: 2.0 }];
    prices = [{ coin: BTC, price: 60000 }, { coin: ETH, price: 3000 }, { coin: DOGE, price: 0.1 }];

    let totalValue = 0;
    wallets.forEach(u => {
        const value = prices.find(p => p.coin === u.coin);
        if (value)
        {
            totalValue += value.price * u.quantity;
        }
    });
    console.log(totalValue);
};
