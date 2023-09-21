/* 
704. 二分查找
给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，
写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。


需注意，若数组长度取值范围较大，计算中点操作 m=i+j / 2中的 i+j 可能超出 int 类型的取值范围，
从而导致计算错误。此时，需使用 m = i + (j-i / 2)

*/

function search(nums: number[], target: number): number {
    let L = 0, R = nums.length - 1, ans = -1;

    while (L <= R) {
        const mid = L + Math.floor((R - L) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] < target) L = mid + 1;
        if (nums[mid] > target) R = mid - 1;
    }

    return ans;
};