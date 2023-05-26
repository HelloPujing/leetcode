// 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。如果 needle 不是 haystack 的一部分，则返回  -1 。

/* 28. 找出字符串中第一个匹配项的下标 */

// KMP算法
// 如果不用剪枝O(m*n) O(m+n)
function strStr(haystack: string, needle: string): number {
    return haystack.indexOf(needle);
};