function isPalindrome(x: number): boolean 
{
    if (x < 0)
        return false;
    //
    let s: string = x.toString();
    let i = 0;
    let reverse_i = s.length - 1;
    //
    while(i < s.length)
    {
        if (s[i] != s[reverse_i])
            return false;
        reverse_i--;
        i++;
    }
    //
    return true;
};