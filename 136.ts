
// O(nlogn) O(1)
function singleNumber(nums: number[]): number {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i = i + 2) {
        if(nums[i+1] !== nums[i]) return nums[i];
    }
    return 0;
};

// 异或运算！
// 善于题目中的已有信息！！！！
function singleNumber2(nums: number[]): number {
    let ans = 0;
    nums.forEach(v => {
        ans ^= v;
    });
    return ans;
};
