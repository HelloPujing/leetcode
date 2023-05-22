
/* 
    双指针
    时间复杂度 O(n)
    空间复杂度 O(1)
    
 */
function removeDulplicates(nums: number[]): number{
    let p = 0;

    for (let q = 1; q < nums.length; q++) {
        if(nums[q] !== nums[p]) nums[++p] = nums[q];
    }
    // console.log(nums);
    return p+1;
}

console.log(removeDulplicates([1])); // 1
console.log(removeDulplicates([1,1,2])); // 2
console.log(removeDulplicates([0,0,1,1,1,2,2,3,3,4])); // 5
