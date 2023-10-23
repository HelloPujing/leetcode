/* 
【动态规划】
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
问总共有多少条不同的路径？

1 <= m, n <= 100
题目数据保证答案小于等于 2 * 109
*/

// m行 n列
// 动态方程：dp[i][j] = dp[i-1][j] + dp[i][j-1]
function uniquePaths(m: number, n: number): number {
    const arr: number[][] = Array(m).fill(null).map(() => Array(n).fill(0));
    arr[0][0] = 1;
    for (let j = 0; j < n; j++) {
        for (let i = 0; i < m; i++) {
            if (i > 0) arr[i][j] += arr[i - 1][j];
            if (j > 0) arr[i][j] += arr[i][j - 1];
        }
        // console.log(arr)
    }
    return arr[m - 1][n - 1]
};


// 只记录一行就行了
function uniquePaths2(m: number, n: number): number {
    const arr: number[] = Array(n).fill(1);

    for (let i = 1; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (j > 0) arr[j] += arr[j - 1];
        }
    }
    return arr[n - 1]
};

console.log(uniquePaths2(3, 7))
