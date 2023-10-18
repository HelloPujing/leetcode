/* 
给你一个非负整数 x ，计算并返回 x 的 算术平方根 。
由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。

0 <= x <= 231 - 1

 
输入：x = 4
输出：2

输入：x = 8
输出：2
解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。


思路：二分法，找到f(n)使得 n*n> 
*/


function mySqrt(x: number): number {
    if (x === 0) return 0;

    let l = 1, r = x;

    while (r - l > 1) {
        const mid = l + Math.floor((r - l) / 2);
        const mul = mid * mid;
        if (mul === x) return mid;
        if (mul > x) r = mid;
        if (mul < x) l = mid;
    }

    return l;
};

console.log(mySqrt(0))
console.log(mySqrt(4)) //2
console.log(mySqrt(5)) //2
console.log(mySqrt(8)) //2