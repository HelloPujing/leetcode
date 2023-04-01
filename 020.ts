
/* 
题目：有效的括号
思路：记录左括号数组片段，反转，校验接下来相同长度的片段
时间复杂度：O(n)
空间复杂度：O(n)
*/
function isValid1(s: string): boolean {
    let p = 0;
    const leftBrackets = ['(', '[', '{'];
    const rightBrackets = [')', ']', '}'];
    // ...

    return false;
};


/* 
栈
时间复杂度：O(n)
空间复杂度：O(n) 
*/
import { Stack } from "./type/stack";
function isValid2(s: string): boolean {
    if(s.length === 0 || s.length % 2 !== 0) return false;

    let p = 0;
    const stack = new Stack<string>();
    const brackets = new Map([['(', ')'],['{', '}'],['[', ']']]);

    while(p < s.length){
        var v = s.charAt(p);
        if(brackets.has(v)){
            stack.push(v);
        }else{
            const popV = stack.pop();
            if(!popV) return false;

            const expect = brackets.get(popV!)
            if(v !== expect) return false;
        }
        p++;
    }

    return stack.size() === 0;
};

// 很慢
// for (const v of s) {
//     if(brackets.has(v)){
//         stack.push(v);
//     }else{
//         const popV = stack.pop();
//         if(!popV) return false;

//         const expect = brackets.get(popV!)
//         if(v !== expect) return false;
//     }
// }

const isValid = isValid2;
console.log(isValid('()')) // true
console.log(isValid('(){}[]')) // true
console.log(isValid('{{{}}}')) // true
console.log(isValid('{[{}]}')) // true
console.log(isValid('(]')) // false
console.log(isValid('[')) // false
console.log(isValid('((')) // false