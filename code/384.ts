class Solution {
    nums: number[];
    original: number[];

    constructor(nums: number[]) {
         this.nums = nums.concat();
         this.original = nums.concat();
    }

    reset(): number[] {
        return this.original;
    }

    shuffle(): number[] {
        const arr = this.nums;
        const len = arr.length;
        for (let i = 0; i < len; i++) {
    
            const j = Math.floor((Math.random() * (len - i))) + i;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

