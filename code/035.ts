// 搜索插入位置

/* 
二分查找
分析：题目可以转换成，找到>=target的下标
时间复杂度O(logn)
空间复杂度O()
 */

function searchInsert(nums: number[], target: number): number {
    if(target <= nums[0]) return 0;

    let l = 0, r = nums.length - 1, ans = nums.length;
    while(l <= r) {
        const mid = ((r - l) >> 1) + l;
        if(target <= nums[mid]) {
            ans = mid;
            r = mid - 1;
        }else{
            l = mid + 1;
        }
    }

    return ans;
};

console.log(searchInsert([1,3,5,6], 5)); // 2
console.log(searchInsert([1,3,5,6], 2)); // 1
console.log(searchInsert([1,3,5,6], 7)); // 4
