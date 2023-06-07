/* 
最小栈


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

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */