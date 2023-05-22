/* 
有效的字母异位词
O(m+n) O(26)
*/

function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) return false;

    const map = new Map();
    for (const v of s) {
        if(map.has(v)){
            map.set(v, map.get(v) + 1);
        }else{
            map.set(v, 1);
        }
    }

    for (const v of t) {
        if(map.has(v)){
            const n = map.get(v);
            if(n > 1) map.set(v, map.get(v) - 1)
            if(n === 1) map.delete(v);
        }else{
            return false;
        }
    }

    return map.size === 0;
};

/* 
方法二 26大小的数组
用unicode排序，记录索引字母的频次
O(m+n) O(26)
*/
console.log("abcd".codePointAt(0));
console.log("abcd".codePointAt(1));
console.log("abcd".codePointAt(2));
console.log("abcd".codePointAt(3));



// 输入: s = "anagram", t = "nagaram"
// 输出: true