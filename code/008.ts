/* 字符串转换整数 */

// O(n) O(1)
function myAtoi(s: string): number {
    s = s.trim();
    if (!s) return 0;

    // 符号；
    let sign = 1;
    if (s[0] === '-') {
        sign = -1;
        s = s.slice(1);
    } else if (s[0] === '+') s = s.slice(1);

    // 读取整数
    let num = 0;
    for (const c of s) {
        if (/^[0-9]$/.test(c)) {
            num = num * 10 + parseInt(c)
        } else {
            break;
        }
    }

    num = num * sign;

    return Math.min(Math.pow(2, 31) - 1, Math.max(num, - Math.pow(2, 31)))
};

console.log(myAtoi('    -42'));