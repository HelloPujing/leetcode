/*  字符串中的第一个唯一字符 */


// hash存储出现次数，再遍历看是否出现一次
// O(n) O(n)
function firstUniqChar(s: string): number {
    const map = new Map();
    const arr = Array.from(s);
    
    arr.forEach((v,i) => { // 不能终止
        if(map.has(v)) {
            map.set(v, map.get(v) + 1)
        } else {
            map.set(v, 1);
        }
    })

    for (let i = 0; i < arr.length; i++) { // 需要索引，可以终止
        const v = arr[i];
        if (map.get(v) === 1) return i;
    }

    return -1;
};

function firstUniqChar2(s: string): number {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) == s.lastIndexOf(s[i])) return i;
    }

    return -1;
};


console.log(firstUniqChar('leetcode')); // 0
