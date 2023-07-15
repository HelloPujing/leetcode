// 移除元素

/* 
数组元素删除法
分析：数组直接赋值比 splice 快的原因是 splice 会导致数组的重新排列，而直接赋值则不需要
空间复杂度：O(n)
时间复杂度：O(1)
 */

function removeElement1(nums: number[], val: number): number {
    let i = 0;
    while(i < nums.length){
        if(nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
        i++;
    }
    console.log(nums);
    return nums.length;
};


/* 
赋值法，同向双指针
空间复杂度：O(n)
时间复杂度：O(1)
 */

function removeElement2(nums: number[], val: number): number {
    let l = 0;
    for (let r = 0; r < nums.length; r++) {
        const v = nums[r];
        if (v !== val) {
            if(nums[l] !== v) nums[l] = v;
            l++;
        };
    }
    console.log(nums);
    return l;
};


/* 
赋值法，反向双指针
分析：避免重复赋值
空间复杂度：O(n)
时间复杂度：O(1)
 */

function removeElement3(nums: number[], val: number): number {
    if(nums.length === 0) return 0;

    if(nums.length === 1) return nums[0] === val ? 0 : 1;


    let l = 0, r = nums.length - 1;
    while(l < r) {
        if(nums[l] === val) {
            nums[l] = nums[r];
            r--;
        } else {
            l++;
        }
    }
    console.log(nums);
    return nums[l] === val ? l : l + 1;
};

const removeElement = removeElement3;
console.log(removeElement([3,2,2,3], 3)); // 2, nums = [2,2]
console.log(removeElement([0,1,2,2,3,0,4,2], 2)); // 5, nums = [0,1,4,0,3]

