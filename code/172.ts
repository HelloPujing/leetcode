/*
给定一个整数 n ，返回 n! 结果中尾随零的数量。
提示 n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1

示例 1：
输入：n = 3
输出：0
解释：3! = 6 ，不含尾随 0
示例 2：

输入：n = 5
输出：1
解释：5! = 120 ，有一个尾随 0
示例 3：

输入：n = 0
输出：0



分析：
注意，如果直接相乘的话，会超过最大数，2的53次方，所以，看质因数，2和5的数量更合适

进阶：
质因子 555 的个数不会大于质因子 222 的个数！！！
*/


function trailingZeroes(n: number): number {
    let count2 = 0;
    let count5 = 0;
    while (n > 0) {
        let n_ = n;
        while (n_ % 2 === 0) {
            count2++;
            n_ = n_ >> 1;
        }
        while (n_ % 5 === 0) {
            count5++;
            n_ /= 5;
        }
        n--;
    }

    return Math.min(count2, count5);
};

function trailingZeroes2(n: number): number {
    let count5 = 0;
    while (n > 0) {
        let n_ = n;
        while (n_ % 5 === 0) {
            count5++;
            n_ /= 5;
        }
        n--;
    }
    return count5;
};

console.log(trailingZeroes(30))