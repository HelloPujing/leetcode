// splice 比较慢 O(n) O(1) 
function moveZeroes1(nums: number[]): void {
    const len = nums.length;
    let iteratLen = len;
    for (let i = 0; i < iteratLen; ) { 
        if(nums[i] === 0){
            nums.splice(i, 1);
            nums[len - 1] = 0;
            iteratLen--;
        }else{
            i++;
        }
    }
};

// 双指针 O(n) O(1) 繁琐，快
/* 
l==0 & r!=0: 交换，l++, r++;
l!=0 & r!=0: 不换，l++, r++;
l==0 & r==0: 同上；
l!=0 & r==0: 同上；
*/
function moveZeroes2(nums: number[]): void {
    let l = 0, r = 0;
    
    for (let l = 0, r = 1; r < nums.length; ) {
        if(nums[l] === 0 && nums[r] !== 0) {
            [nums[l], nums[r]] =  [nums[r], nums[l]];
            l++, r++;
        }
        else if(nums[l] === 0 && nums[r] === 0){
            r++;
        }
        else{
            l++, r++;
        }
    }
}

// 双指针 O(n) O(1) 简洁，不快
/* 
l=r=0
r不是0就交换，l++ r++
r是0就不交换, r++
*/
function moveZeroes3(nums: number[]): void {
    let l = 0, r = 0;
    
    while(r < nums.length){
        if(nums[r] !== 0){
            [nums[l], nums[r]] =  [nums[r], nums[l]];
            l++;
        }
        r++;
    }
    console.log(nums);
}


// 输入: nums = [0,1,0,3,12]
// 输出: [1,3,12,0,0]


const moveZeroes = moveZeroes3;
moveZeroes([0,1,0,3,12]);