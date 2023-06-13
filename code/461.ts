function hammingDistance(x: number, y: number): number {
    if(x === y) return 0;

    
    let diff = x ^ y;
    let count = 0;

    while(diff !== 0){
        diff &= diff - 1;
        count++;
    }

    return count;
};