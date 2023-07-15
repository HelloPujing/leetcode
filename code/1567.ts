

/* 
乘积为正数的最长子数组长度

P数组：P[i]表示下标为i结尾的乘积为正的最长子数组长度
N数组：N[i]表示下标为i结尾的乘积为负的最长子数组长度

当i=0时，
p[0] = 1  // num[0] > 0
N[0] = 1  // num[0] < 0

当i>1时，根据num[i]计算两个数组
num[i] > 0
则：

p[i] = p[i - 1] + 1
N[i] = p[i - 1] + 1 或者0 // 如果p[i-1] = 0的话 



num[i] < 0
则：

p[i] = N[i - 1] + 1
N[i] = P[i - 1] + 1 或者0 // 如果p[i-1] = 0的话

 */


function getMaxLen(nums: number[]): number {
    let max, positive = [0], negative = [0];

    // 初始化 i=0
    nums[0] > 0 ? positive[0] = 1 : (nums[0] < 0 ? negative[0] = 1 : null);
    max = Math.max(0, positive[0]);

    // i > 0
    for (let i = 1; i < nums.length; i++) {
        const v = nums[i];
        let prevP = positive[i-1];
        let prevN = negative[i-1];

        
        if(v === 0) {
            positive[i] = 0;
            negative[i] = 0;
        }
        
        if(v > 0) {
            positive[i] = ++prevP; // 如果是正数，无论前者是不是0，都要+1，是0就从当前算
            negative[i] = prevN === 0 ? 0 : ++prevN;
        }

        if(v < 0) {
            positive[i] = prevN === 0 ? 0 : ++prevN; 
            negative[i] = ++prevP;
        }
        
        max = Math.max(max, positive[i]);
    }

    return max;
};

console.log(getMaxLen([1,-2,-3,4])); // 4
console.log(getMaxLen([0,1,-2,-3,-4])); // 3
console.log(getMaxLen([-1,-2,-3,0,1])); // 2
console.log(getMaxLen([1,0,0,0,0])); // 0
