var groupAnagrams = function(strs)
{
    if (strs.length === 0)
        return [];

    const tab = {};

    for(let i = 0; i < strs.length; i++)
    {
        const key = strs[i].split('').sort().join('');
        if (tab[key] === undefined)
        {
            tab[key] = [strs[i]];
        }
        else
        {
            tab[key].push(strs[i]);
        }
    }
    console.log(tab);
    return Object.values(tab);
}