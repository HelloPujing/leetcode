/* 

方法一：暴力解法 O(n三次方)
方法二：中心扩散法 O(n二次方)，空间O(1)
方法三：动态规划DP O(n二次方)，空间O(n二次方) 每个状态的结果记录下来，下一次会参考

中心扩散思路：
回文字符串，分奇数偶数字符串
遍历 -> 分别判断奇偶的回文

DP思路：
首先，>2的字符串，如果是回文字符，那么去掉首尾剩下的依然是回文字符，即P(i,j) = p(i+1, j-1) & (si === sj)
其次，边界情况，=1的字符串，一定是回文；=2的字符串，如果s1=s2，也是回文
最后，答案是，所有p(i,j)中，j-i+1的最大值

状态：一个子串是否为回文 p(i,j)

 */

function longestPalindrome(s: string): string {
    const len = s.length;
    if(len === 1) return s;
    if(len === 2) return s.charAt(0) === s.charAt(1) ? s : s.charAt(0);
    
    let max = 0;
    let ans = '';
    for (let i = 0; i < len - 1; i++) {
        const oddExpand = expandFromCenter(s, i, i);
        const evenExpand = expandFromCenter(s, i, i+1);
        if(oddExpand > max) {  
            max = oddExpand; 
            const start = i - (oddExpand - 1 )/ 2;
            ans = s.substring(start, start + max);
        };
        if(evenExpand > max) { 
            max = evenExpand;
            const start = i - (evenExpand / 2 - 1);
            ans = s.substring(start, start + max);
        };
    }

    return ans;
};

function expandFromCenter(s: string, i: number, j: number) {
    while(i >= 0 && j <= s.length - 1 && s.charAt(i) === s.charAt(j)){
        i--;
        j++;
    }
    return j - i - 1; // （j-1）- (i+1) + 1 
}

console.log(longestPalindrome('babad')); // 输出："bab" or "aba"
console.log(longestPalindrome('cbbd')); // 输出："bb"
console.log(longestPalindrome('babadab')); // 输出："badab"
console.log(longestPalindrome('abbb')); // 输出："bbb"
console.log(longestPalindrome('ccd')); // cc
