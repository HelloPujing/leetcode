/* 
34. 在排序数组中查找元素的第一个和最后一个位置
给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。
如果数组中不存在目标值 target，返回 [-1, -1]。
你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

示例 1：
输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]

示例 2：
输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]

示例 3：
输入：nums = [], target = 0
输出：[-1,-1]

nums 是一个非递减数组（递增可相等）

思路：
1. 二分找到target，如果找不到，返回-1 -1
2. 分别左二分找边界，右二分找边界
3. 找到那个左边不是target，i是target的index
*/

function searchRange(nums: number[], target: number): number[] {
    // 寻找target
    let targetIndex = -1;
    let L = 0, R = nums.length - 1;

    while (L <= R) {
        const mid = ((R - L) >> 1) + L;
        if (nums[mid] === target) {
            targetIndex = mid;
            break;
        }
        if (nums[mid] > target) R = mid - 1;
        if (nums[mid] < target) L = mid + 1;
    }

    // console.log(targetIndex)
    if (targetIndex === -1) return [-1, -1];

    // 寻找左边界
    let ansL = -1;
    L = 0, R = targetIndex;
    while (L <= R) {
        const mid = ((R - L) >> 1) + L;
        // console.log(L, R, mid)

        if (nums[mid] === target && nums[mid - 1] !== target) {
            ansL = mid;
            break;
        }
        if (nums[mid] === target) R = mid;
        if (nums[mid] < target) L = mid + 1;
    }
    // console.log(ansL)


    // 寻找右边界
    let ansR = -1;
    L = targetIndex, R = nums.length - 1;
    while (L <= R) {
        const mid = ((R - L) >> 1) + L;
        // console.log(L, R, mid)
        if (nums[mid] === target && nums[mid + 1] !== target) {
            ansR = mid;
            break;
        }
        if (nums[mid] === target) L = mid;
        if (nums[mid] > target) R = mid;
    }
    // console.log(ansR);

    return [ansL, ansR];
};

// console.log(searchRange([5, 7, 7, 8, 8, 10], 6))
// console.log(searchRange([], 0))
console.log(searchRange([1, 2, 3, 3, 3, 3, 4, 5, 9], 3))
console.log(searchRange([2, 2], 2))
console.log(searchRange([1, 2, 3, 3, 3, 3, 4, 5, 9], 3))
