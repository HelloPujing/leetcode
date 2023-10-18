/* 
搜索旋转排序数组

整数数组 nums 按升序排列，数组中的值 互不相同 。
在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。
给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。
你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。

高级版的二分查找
*/

function search033(nums_: number[], target_: number): number {
    const onums = nums_;


    function search_(nums: number[], target: number): number {
        if (nums.length === 0) return -1;
        // console.log(onums, nums);

        const midIndex = Math.floor(nums.length / 2);
        const mid = nums[midIndex];

        if (mid === target) {
            console.log('-------target')
            console.log(onums, mid)
            return onums.indexOf(mid)
        };

        console.log(mid);

        // 画个数轴

        // 左侧
        const start = nums[0];
        if (start === target) {
            console.log('-------start')
            return onums.indexOf(start)
        };

        console.log(start, mid, target)
        if (
            (start < mid && start < target && target < mid) ||
            (mid < start && (target > start || target < mid))
        ) {
            console.log('left');
            console.log(midIndex, nums.slice(1, midIndex))
            return search_(nums.slice(1, midIndex), target);
        }


        // 右侧
        const end = nums[nums.length - 1];
        if (end === target) {
            console.log('------end');
            return onums.indexOf(end);
        };
        if (
            (mid < end && mid < target && target < end) ||
            (mid > end && (target > mid) || (target < end))
        ) {
            console.log('right');
            console.log(midIndex + 1, nums.slice(1, midIndex))
            return search_(nums.slice(midIndex + 1, nums.length), target)
        }

        return -1;
    }

    return search_(nums_, target_);
};

// console.log(search033([4, 5, 6, 7, 0, 1, 2], 0))
// console.log(search033([1, 3, 5], 0))
// console.log(search033([1], 1))
console.log(search033([4, 5, 6, 7, 0, 1, 2], 5))