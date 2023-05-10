/* 验证回文串*/

// 双指针，一次遍历 O(n) O(1)
function isPalindrome1(s: string): boolean {
    for (let i = 0, j = s.length - 1; i <= j;) {
        const reg = /^[a-zA-Z0-9]+$/;
        while(!reg.test(s.charAt(i)) && i < j) i++;
        while(!reg.test(s.charAt(j)) && i < j) j--;

        if(i < j && s.charAt(i).toLowerCase() !== s.charAt(j).toLowerCase()) return false;
        
        i++;
        j--;
    }
    return true;
};

// 输入: s = "A man, a plan, a canal: Panama"
// 输出：true
// 解释："amanaplanacanalpanama" 是回文串。

// console.log(isPalindrome1('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome1('race a car')); // false
// console.log(isPalindrome1(' ')); // true