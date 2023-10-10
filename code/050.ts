/* 
50. Pow(x, n)
实现 pow(x, n) ，即计算 x 的整数 n 次幂函数（即，xn ）。


分析：
快速幂，x1 - x2 - x4 - x8 - x16 - x32 - x64 -> x77，前边步骤都是上一个步骤的结果相乘
边界，x0 = 1

顺着的话，最后一步不好算
倒着：
x77 = x38 * x38 * x1(余数为1)

*/

function myPow(x: number, n: number): number {
    function quickMul(x: number, n: number): number {
        if (n === 0) return 1;
        if (x === 0) return 0;

        const v = quickMul(x, Math.floor(n / 2));
        return v * v * (n % 2 === 1 ? x : 1);
    }
    return n > 0 ? quickMul(x, n) : 1 / quickMul(x, -n);
};



console.log(myPow(5, 2));
// console.log(myPow(0.00001, 2147483647));