// 简单文本翻转
// 时间复杂度 O(n)
// 空间复杂度 O(n)
function isPalindrome1(x: number): boolean {
    const str = x.toString();
    if(str === str.split("").reverse().join("")) return true;
    return false;
};

// 双指针
// 时间复杂度 O(n)
// 空间复杂度 O(1)
function isPalindrome2(x: number): boolean {
    const arr = x.toString().split('');

    let l = 0, r = arr.length - 1;

    while(l <= r){
        if (arr[l] !== arr[r]) return false;
        l++;
        r--;
    }

    return true;
};

const isPalindrome = isPalindrome2;

console.log(isPalindrome(123));
console.log(isPalindrome(12));
console.log(isPalindrome(121));