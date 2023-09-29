/*
给你一个字符串 columnTitle ，表示 Excel 表格中的列名称。返回 该列名称对应的列序号 。

例如：

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
 

示例 1:

输入: columnTitle = "A"
输出: 1
示例 2:

输入: columnTitle = "AB"
输出: 28
示例 3:

输入: columnTitle = "ZY"
输出: 701

*/

function titleToNumber(columnTitle: string): number {
    const ACode = 'A'.charCodeAt(0);
    const l = columnTitle.length;
    let sum = 0;

    for (let i = 0; i <= l - 1; i++) {
        sum += (columnTitle.charCodeAt(i) - ACode + 1) * Math.pow(26, (l - 1 - i))
    }

    return sum;
};

console.log(titleToNumber('B'))
