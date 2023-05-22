/* 反转字符串 */

function reverseString(s: string[]): void {
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        [s[i], s[j]] = [s[j], s[i]];
    }
    console.log(s);
};


// 输入：s = ["h","e","l","l","o"]
// 输出：["o","l","l","e","h"]

reverseString(["h","e","l","l","o"])