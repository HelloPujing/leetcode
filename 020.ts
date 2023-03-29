
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
class Stack<T> {
    private items: T[];
    constructor() {
        this.items = [];
    }
    push(item: T){
        this.items.push(item);
    }
    pop(): T | undefined{
        return this.items.pop();
    }
    peek(): T | undefined{
        const len = this.items.length;
        return len ? this.items[len-1] : undefined;
    }
    isEmpty(): boolean{
        return this.items.length === 0;
    }
    size(): number{
        return this.items.length;
    }
}
function isValid2(s: string): boolean {
    if(s.length === 0 || s.length % 2 !== 0) return false;

    const stack = new Stack<string>();
    const brackets = new Map([['(', ')'],['{', '}'],['[', ']']]);

    const arr = s.split('');

    for (const v of arr) {
        if(brackets.has(v)){
            stack.push(v);
        }else{
            const popV = stack.pop();
            const expect = brackets.get(popV!)
            if(v !== expect) return false;
        }
    }

    if(stack.size() !== 0) return false;

    return true;
};


const isValid = isValid2;
console.log(isValid('()')) // true
console.log(isValid('(){}[]')) // true
console.log(isValid('{{{}}}')) // true
console.log(isValid('{[{}]}')) // true
console.log(isValid('(]')) // false
console.log(isValid('[')) // false
console.log(isValid('((')) // false