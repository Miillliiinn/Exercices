function myAtoi(s: string): number
{
    let num = 0;
    let i = 0;
    let copy_i = 0;
    let signe = 1;
    //
    while(s[i] && (s[i] <= ' '))
        i++;
    //
    if (s[i] === '-' || s[i] === '+')
    {
        if (s[i] === '-')
            signe = -1;
        copy_i = 1;
    }
    copy_i = copy_i + i;
    //
    while(s[i] && (s[i] === '-' || s[i] === '+'))
        i++;
    //
    if (copy_i != i)
        return 0;
    //  
    while(i < s.length)
    {
        if (s[i] < '0' || s[i] > '9')
            break;
        num = (num * 10) + (s[i].charCodeAt(0) - '0'.charCodeAt(0));
        i++;
    }
    //
    if (signe === 1 && num > 2147483647)
        num = 2147483647
    if (signe === -1 && num > 2147483648)
        num = 2147483648
    //
    return num * signe;
}