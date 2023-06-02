/* 
打家劫舍
动态规划

动态转移方程
f(n) = max(f(n - 2) + nums(n) || f(n - 1))

边界
f(1) = nums(n)
f(2) = max(nums(0), nums(1))

O(n) O(1)
*/

function rob(nums: number[]): number {
    const len = nums.length;
    if(len === 1) return nums[0];
    if(len === 2) return Math.max(nums[0], nums[1]);

    let max = 0;
    let prepre = nums[0];
    let pre = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        i % 2 === 0 ? prepre = Math.max(prepre + nums[i], pre) : pre = Math.max(pre + nums[i], prepre); 
        max = Math.max(prepre, pre);
    }

    return max;
};