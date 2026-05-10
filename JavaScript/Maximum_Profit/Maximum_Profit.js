function maximumProfit(val)
{
    let min = 0; let max;

    for(let i = 0; i < val.length; i++)
    {
        if (i === 0)
            min = val[i];
        if (i > 0 && min > val[i])
            min = val[i];
        const dif = val[i] - min
        if (max === undefined)
            max = dif;
        else
        {
            if (dif > max)
                max = dif;
        }
    }
}