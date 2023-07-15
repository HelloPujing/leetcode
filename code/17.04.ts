/* 
面试题 17.04. 消失的数字
*/

function missingNumber(nums: number[]): number {
    const set = new Set(nums);

    for (let i = 0; i <= nums.length; i++) {
        if(!set.has(i)) return i;
    }

    return -1;
};

function missingNumber2(nums: number[]): number {
    const n = nums.length;
    return n * (n + 1) / 2 - nums.reduce((pre, curr) => pre + curr, 0);
};


/* 
异或
x⊕x=0  x⊕0=x
*/

function missingNumber3(nums: number[]): number {
   
    let xor = nums.reduce((pre, curr) => pre ^ curr, 0);

    for (let i = 0; i <= nums.length; i++) {
        xor ^= i;
    }
   
    return xor;
};
