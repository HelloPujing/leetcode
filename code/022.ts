/*
数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

示例 1：

输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]
示例 2：

输入：n = 1
输出：["()"]

输入：n = 2
输出：["()", "()()", "(())"]
*/

function generateParenthesis(n: number): string[] {
    if (n === 1) return ['()'];

    const set: Set<string> = new Set();

    const arr = generateParenthesis(n - 1);
    arr.forEach((str, i) => { // 循环，往str里插一对括号的所有解法，到set
        for (let i = 0; i < str.length; i++) {
            const strWithLeft = str.slice(0, i) + '(' + str.slice(i); // 在i位置插入左括号
            let leftCount = 0, rightCount = 0;
            for (let j = i; j < str.length + 1; j++) {
                strWithLeft.charAt(j) === '(' ? leftCount++ : rightCount++;
                if (leftCount === rightCount + 1) {
                    const strWithBoth = strWithLeft.slice(0, j + 1) + ')' + strWithLeft.slice(j + 1);
                    set.add(strWithBoth);
                }
            }
        }
    })

    return Array.from(set);
};