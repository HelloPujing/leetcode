function isPowerOfThree(n: number): boolean {
    if(n === 0) return false;

    let x = n;
    while(x % 3 === 0){
        x = x / 3;
    }

    return x === 1;
};