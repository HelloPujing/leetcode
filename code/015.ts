
/* 
输入：nums = [0,0,0]
输出：[[0,0,0]]

分解成，遍历数组，找num[i]为-target的右侧数组twoSum问题
O(n*n) O(n)
*/

function threeSum(nums: number[]): number[][] {
    const ans: number[][] = [];
    const targetSet = new Set();
    for (let i = 0; i < nums.length; i++) {
        const a = nums[i];
        const target = -a;

        const set = new Set();
        for (let j = i + 1; j < nums.length; j++){
            const c = nums[j];
            const b = target - c; // 目标，找存在的b

            const str = `${Math.max(a, b, c)}${Math.min(a, b, c)}`; 
            
            if(set.has(b) && !targetSet.has(str)) {
                ans.push([a, b, c]);
                targetSet.add(str);
            } else {
                set.add(c);
            }

            console.log(`a=${a}, b=${b}, c=${c}, sum=${str}`)
            console.log(set)
            console.log(ans)
            console.log(targetSet)
        }
    }
    return ans;
};


/* 
双指针

*/
function threeSum2(nums: number[]): number[][] {
    const ans: number[][] = [];
    const arr = nums.sort((a, b) => a - b);
    const len = arr.length;
    let ll = -Infinity;

    console.log(arr);

    for (let i = 0; i < len; i++) {
        const a = arr[i];
        if(a === ll) continue;

        ll = a;
        let l = -Infinity;
        let r = Infinity;
        for (let j = i + 1, k = arr.length - 1; j < k; ) {
            const b = arr[j];
            const c = arr[k];
            
            console.log(i, j, k, '|', a, b, c, '|', l, r);
            if(b === l || (a + b + c) < 0){
                l = b;
                j++;
            }

            else if(c === r || (a + b + c) > 0){
                r = c;
                k--;
            }

            else if(a + b + c === 0){
                console.log('insert');
                ans.push([a, b, c]);
                l = b;
                r = c;
                j++;
                k--;
            }
            
            
        }
        
    }

    console.log(ans);
    return ans;
};


// threeSum2([-1,0,1,2,-1,-4])
// threeSum2([-2,0,0,2,2])
threeSum2([-1,0,1,2,-1,-4,-2,-3,3,0,4])