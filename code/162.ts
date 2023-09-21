/*
峰值元素是指其值严格大于左右相邻值的元素。
给你一个整数数组 nums，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回 任何一个峰值 所在位置即可。
你可以假设 nums[-1] = nums[n] = -∞ 。
你必须实现时间复杂度为 O(log n) 的算法来解决此问题。

1 <= nums.length <= 1000
-231 <= nums[i] <= 231 - 1
对于所有有效的 i 都有 nums[i] != nums[i + 1]

示例 1：
输入：nums = [1,2,3,1]
输出：2
解释：3 是峰值元素，你的函数应该返回其索引 2。

示例 2：
输入：nums = [1,2,1,3,5,6,4]
输出：1 或 5 
解释：你的函数可以返回索引 1，其峰值元素为 2；
     或者返回索引 5， 其峰值元素为 6。
*/


// 因为两边负无穷，所以只要往高处走，就能到封顶
function findPeakElement(nums: number[]): number {
    let currentIdx = Math.floor(nums.length / 2);

    while (currentIdx >= 0 && currentIdx <= nums.length - 1) {
        const next = nextIdx(nums, currentIdx);
        if (next === currentIdx) return currentIdx;
        currentIdx = next;
    }

    return currentIdx;
};

function nextIdx(nums: number[], idx: number): number {
    let nextIdx = idx;

    const v = nums[idx];
    const pre = nums[idx - 1];
    const next = nums[idx + 1];

    if (pre > v) nextIdx = idx - 1;
    if (next > v) nextIdx = idx + 1;

    return nextIdx;
}

