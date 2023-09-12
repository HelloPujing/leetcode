/*
前 K 个高频元素：
给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。


输入: nums = [1,1,1,2,2,3], k = 2
输出: [1,2]
示例 2:

输入: nums = [1], k = 1
输出: [1]
*/

// 记录每个元素出现次数，
function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map();
    nums.forEach(v => map.set(v, map.has(v) ? map.get(v) + 1 : 1));

    const valueTimes = Array.from(map.entries()).sort((a, b) => b[1] - a[1]); // console.log(valueTimes);
    return valueTimes.slice(0, k).map(v => v[0]);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))
