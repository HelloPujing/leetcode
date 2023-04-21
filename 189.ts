/* 
    189. 轮转数组
*/

function rotate(nums: number[], k: number): void {
    if(k === 0 || nums.length ===1) return;

    const subArrs = nums.splice(nums.length - (k % nums.length));
    nums.unshift(...subArrs);
};

// 输入: nums = [1,2,3,4,5,6,7], k = 3
// 输出: [5,6,7,1,2,3,4]

// [1,2] 5
// [1,2]