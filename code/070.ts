/* 
爬楼梯 

分析：
n = 1, 1种
n = 2, 2种（1+1， 2）
n = 3, 3种（第一层的数量1，加上第一层到第3层是2种可能）
n = n, n-2层的可能性（最后一步跨两步） + n-1层的可能性（最后一层跨一步）

*/


// 递归，会重复计算，耗时久
function climbStairs(n: number): number {
    if(n === 1) return 1;
    if(n === 2) return 2;
    return climbStairs(n - 2) + climbStairs(n - 1);
};


function climbStairs2(n: number): number {
    let i = 0, j = 0, total = 1;
    for (let count = 1; count <= n; count++) {
        i = j;
        j = total;
        total = i + j;
    }

    return total;
};

// console.log(climbStairs(45)); // 10s
console.log(climbStairs2(45)); // 0.8s
