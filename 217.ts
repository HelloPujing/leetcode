
/* 
哈希表
*/

// O(n) O(n)
function containsDuplicate(nums: number[]): boolean {
    const set = new Set();
    for (const v of nums) {
        if(set.has(v)) return true;
        set.add(v);
    }
    return false;
};

// O(n) O(1)
function containsDuplicate2(nums: number[]): boolean {
    return nums.length > (new Set(nums)).size
}

console.log(containsDuplicate([1,2,3,1]));