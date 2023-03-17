// 一、暴力解法 
// 时间复杂度 O(n²)
// 空间复杂度 O(1)
function twoSum1(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) return [i, j];
        }
    }
    return [];
};

// 二、双指针
// 提示：sort 快排 O(nlogn)
// 时间复杂度 O(nlogn)
// 空间复杂度 O(n)
function twoSum2(nums: number[], target: number): number[] {
    const sortArr = nums.map((v, i) => [v, i]).sort((a, b) => a[0] - b[0]);
    
    let left = 0, right = nums.length - 1;
    let sum = sortArr[left][0] + sortArr[right][0];

    while (sum !== target) {
        if(sum > target) right--;
        if(sum < target) left++;
        sum = sortArr[left][0] + sortArr[right][0]
    }

    return [sortArr[left][1], sortArr[right][1]];
};

// 三、查找表法（无需维护顺序，哈希表）
// 时间复杂度O(n)
// 空间复杂度O(n)
function twoSum3(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const v = nums[i];
        const bingoV = target - v;

        if(map.has(bingoV)){
            return [map.get(bingoV)!, i]; // !非空断言运算符
        }
        map.set(v, i)
    }
    return [];
}

const twoSum = twoSum3;

// test cases
console.log(twoSum([1,2,3,4,5], 3));
console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,3], 6));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([1,5,5,10], 10));

// result
// [ 0, 1 ]
// [ 0, 1 ]
// [ 0, 1 ]
// [ 1, 2 ]
// [ 1, 2 ]