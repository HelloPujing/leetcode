export class Stack<T> {
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