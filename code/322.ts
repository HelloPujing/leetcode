/* 
【零钱兑换】
给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
你可以认为每种硬币的数量是无限的。


示例 1：
输入：coins = [1, 2, 5], amount = 11
输出：3 
解释：11 = 5 + 5 + 1

示例 2：
输入：coins = [2], amount = 3
输出：-1

示例 3：
输入：coins = [1], amount = 0
输出：0
*/


/* 
最少的硬币个数 -> 取余最大的，



f(n) = min f(amount - Ci) + 1 
1. 递归 // f(1)会算coins.length次
2. f(1) f(2) ... f(n)

举例：
coins = [1, 2, 5], amount = 11

f(0) = 0;
f(1) = min(f(0), f(-1), f(-4)) + 1 = 1
f(2) = min(f(1)，f(0), f(-3)) + 1 = 1
。。。
如果负数，就填无穷大
*/
function coinChange(coins: number[], amount: number): number {
    const minArr = Array(amount + 1).fill(Infinity);
    minArr[0] = 0;

    for (let indexAmount = 1; indexAmount <= amount; indexAmount++) {
        for (let j = 0; j < coins.length; j++) {
            const coin = coins[j];
            const subAmount = indexAmount - coin;
            if (subAmount >= 0) {
                const n = minArr[subAmount] + 1;
                minArr[indexAmount] = Math.min(minArr[indexAmount], n);
            }
            // console.log(i, j, subAmount)
        }
        // console.log(minArr)
    }

    return minArr[amount] === Infinity ? -1 : minArr[amount];
};

// console.log(coinChange([1, 2, 5], 11))
console.log(coinChange([2], 3))