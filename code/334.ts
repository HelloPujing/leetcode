/* 递增三元子序列
dp O(n) O(n) - 是否存在i，左侧有小于它的值（左侧最小小于它），右侧有大于它的值（右侧最大大于它）


*/

function increasingTriplet(nums: number[]): boolean {
    const len = nums.length;
    if(len < 3) return false;

    const minLeft = new Array(len).fill(0);
    minLeft[0] = nums[0];
    for (let i = 1; i < len ; i++) {
        minLeft[i] = Math.min(minLeft[i - 1], nums[i]);
    }

    const maxRight = new Array(len).fill(0);
    maxRight[len - 1] = nums[len - 1];
    for (let i = len - 2; i >= 0 ; i--) {
        maxRight[i] = Math.max(maxRight[i + 1], nums[i]);
    }

    for (let i = 0; i < len; i++) {
        const v = nums[i];
        if(minLeft[i - 1] < v && v < maxRight[i + 1]) return true;
    }
    
    return false;
};

console.log(increasingTriplet([1,2,3,4,5]))