/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

    // f(n) = f(n - 1) + f(n - 2);

    if (n <= 2)
        return n;

    let one = 1;
    let two = 2;
    let count = 0;

    for(let i = 2; i < n; i++)
    {
        count = one + two;

        one = two;
        two = count;
    }
    return count;
};