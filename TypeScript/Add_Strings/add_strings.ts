function addStrings(num1: string, num2: string): string {
    let result: string = ;

    let n1 = BigInt(num1);
    let n2 = BigInt(num2);

    result = (n1 + n2).toString();

    return result
};
