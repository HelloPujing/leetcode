
/* 
思路：
重点1，滑动窗口，当k向右移动1格时，剩下判断过的字符一定没
重点2, 哈希查表，set
 */

function lengthOfLongestSubstring(s: string): number {
    const len = s.length;
    if (len === 0) return 0;

    let max = 1;
    let window = new Set(s.charAt(0));

    for (let start = 0, end = 1; start + max < len; start++) {

        while (!window.has(s.charAt(end)) && end < len) {
            window.add(s.charAt(end));
            end++;
        }

        max = Math.max(max, window.size)

        window.delete(s.charAt(start));
        if (end === start) end++;
    }

    return max;
};

// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('bbbbb')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3

