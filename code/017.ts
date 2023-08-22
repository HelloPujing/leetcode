/* 
【电话号码的字母组合】
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

2 = a b c
3 = d e f
4 = g h i


示例 1：

输入：digits = "23"
输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
示例 2：

输入：digits = ""
输出：[]
示例 3：

输入：digits = "2"
输出：["a","b","c"]

提示：
0 <= digits.length <= 4
digits[i] 是范围 ['2', '9'] 的一个数字。
*/

function getStrings(n: number): string[] {
    const AUnicode = 'a'.charCodeAt(0); // 97
    const offsetCode = 3 * (n - 2) + AUnicode;
    const str1 = String.fromCharCode(offsetCode);
    const str2 = String.fromCharCode(offsetCode + 1);
    const str3 = String.fromCharCode(offsetCode + 2);
    return [str1, str2, str3];
}

console.log(getStrings(2)) // [ 'a', 'b', 'c' ]
console.log(getStrings(4)) // [ 'g', 'h', 'i' ]

const MAPPING = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

function letterCombinations(digits: string): string[] {
    if (!digits) return [];

    const ans: string[] = [];

    const firstNum = digits.charAt(0);
    const remainStr = digits.substring(1);
    const strs = MAPPING[Number(firstNum)].split(''); // [a, b, c]
    strs.forEach((letter) => {
        if (!remainStr) return ans.push(letter);

        letterCombinations(remainStr).forEach(v => {
            ans.push(letter + v)
        })
    })

    return ans;
};