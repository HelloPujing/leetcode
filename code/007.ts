/* 整数反转 */

/* 
如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
假设环境不允许存储 64 位整数（有符号或无符号）。 
*/

// 这个不行，溢出了
function reverse1(x: number): number {
    const arr = `${x}`.split('');
    const isNegative = arr[0] === '-';
    if(isNegative) arr.splice(0, 1);
    const num = Number(arr.reverse().join(''))
    return isNegative ? -num : num;
};


function reverse2(x: number): number {
    let revertNum = 0;
    const isNegative = x < 0;
    let pos = isNegative ? -x : x;

    const MIN = Math.pow(-2, 31);
    const MAX = Math.pow(2, 31) - 1;

    while(pos != 0) {
        const last = pos % 10;
        revertNum = revertNum * 10 + last;
        if(revertNum > MAX) return 0;
        pos = Math.floor(pos / 10);
    }

    return isNegative ? -revertNum : revertNum;
};


// 更简洁
function reverse3(x: number): number {
    let revertNum = 0;

    const MIN = Math.pow(-2, 31);
    const MAX = Math.pow(2, 31) - 1;

    while(x != 0) {
        const last = x % 10;
        revertNum = revertNum * 10 + last;

        if(revertNum > MAX) return 0;
        if(revertNum < MIN) return 0;

        x = Math.trunc(x/10);
    }

    return revertNum;
};

const reverse = reverse3;

console.log(reverse(120)); // 21
console.log(reverse(-120)); // -21
console.log(reverse(1534236469)); //0

