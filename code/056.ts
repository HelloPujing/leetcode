/* 
56. 合并区间
以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

示例 1：
输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

示例 2：
输入：intervals = [[1,4],[4,5]]
输出：[[1,5]]
解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。


*/

function merge(intervals: number[][]): number[][] {
    const ansArr: number[][] = [];
    if (intervals.length === 0) return [];

    // 先排序
    const sortArr = intervals.sort((paira, pairb) => paira[0] - pairb[0])

    // 再合并
    let idx = 0;
    ansArr.push(sortArr[0]);
    for (let i = 1; i < sortArr.length; i++) {
        const [a, b] = sortArr[i];
        const curr = ansArr[idx];
        if (a <= curr[1] && b > curr[1]) curr[1] = b;
        if (a > curr[1]) {
            ansArr.push(sortArr[i]);
            idx++;
        }
        // console.log(ansArr);
    }

    return ansArr;
};