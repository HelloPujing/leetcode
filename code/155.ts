/* 
最小栈
同步栈，存储最小值

*/


class MinStack {
    min:number;
    list: number[];
    constructor() {
        this.list = new Array();
        this.min = Infinity;
    }

    push(val: number): void {
        this.list.push(val);
        this.min = Math.min(val, this.min);
    }

    pop(): void {
        const v = this.list.pop();
        if(v === this.min){ this.min = Math.min(...this.list) }
    }

    top(): number {
        return this.list[this.list.length - 1];
    }

    getMin(): number {
        return this.min;
    }
}

class MinStack2 {
    stack_min: number[];
    stack_x: number[];
    constructor() {
        this.stack_min = new Array();
        this.stack_x = new Array();
    }

    push(val: number): void {
        const len = this.stack_x.length;
        this.stack_x.push(val);
        this.stack_min.push(this.stack_min.length > 0 ? Math.min(val, this.stack_min[len - 1], val) : val);
    }

    pop(): void {
        this.stack_x.pop();
        this.stack_min.pop();
    }

    top(): number {
        return this.stack_x[this.stack_x.length - 1];
    }
    
    getMin(): number {
        return this.stack_min[this.stack_min.length - 1];
    }
}