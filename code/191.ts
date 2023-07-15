function hammingWeight(n: number): number {
    let decimal = n;
    let count = 0;
    while(decimal !== 0){
        const mod = decimal % 2;
        if(mod === 1) count++;
        decimal = Math.floor(decimal / 2);
    }
    return count;
};

function hammingWeight2(n: number): number {
    let count = 0;
    while(n !== 0){
        n &= n - 1;
        count++;
    }
    return count;
};