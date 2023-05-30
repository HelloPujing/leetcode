/* 
最大子数组和

用dp

[-2,1,-3,4,-1,2,1,-5,4]

i/j  1	2	3	4	5	6	7	8	9
1	-2	-1	-4	0	-1	1	2	-3	1
2		1	-2	2	1	3	4	-1	3
3			-3	1	0	2	3	-2	2
4				4	3	5	6	1	5
5					-1	1	2	-3	1
6						2	3	-2	2
7							1	-4	0
8								-5	-1
9									4

方法一：如果存储二维数组，则可能溢出；
方法二：实际上只要存竖着一列，计算下一列，就行了。
方法三：每一列都是加的一样的数字，所以，前一列最大的数字加现在的数字，或者当前要加的这个数字，那个大，就是当前的最大数
方法三的动态规划转移方程为：f(i)=max{f(i−1)+nums[i],nums[i]}
*/



function maxSubArray(nums: number[]): number {
    const len = nums.length;
    const array = new Array(len);

    let biggest = -Infinity;

    for (let i = 0; i < len; i++) {
        array[i] = new Array(len).fill(0);
        for (let j = i; j < len; j++) {
            const v = j === i ? nums[i] : array[i][j - 1] + nums[j];
            array[i][j] = v;
            if(biggest < v) biggest = v;
        }
    }

    return biggest;
};


function maxSubArray2(nums: number[]): number {
    const len = nums.length;
    let biggest = -Infinity;

    let preArr = new Array(0);
    for (let j = 0; j < len; j++) {
        const arr = new Array(j + 1);
        for (let i = 0; i < len; i++) {
            arr[i] = j === i ? nums[j] : preArr[i] + nums[j];
            if(biggest < arr[i]) biggest = arr[i];
        }        
        preArr = arr;
    }

    return biggest;
};

// O(n) O(n)
// function maxSubArray3(nums: number[]): number {
//     const len = nums.length;
//     const bigArray = new Array(len);

//     let biggest = -Infinity;

//     for (let j = 0; j < len; j++) {
//         const v = nums[j]
//         if(j === 0) {
//             bigArray[j] = v;
//         } else {
//             bigArray[j] = Math.max(v, bigArray[j - 1] + v)
//         }
//         if(bigArray[j] > biggest) biggest = bigArray[j];
//     }

//     return biggest;
// };


// 改进，其实只和f(i - 1)有关，不需要存下一整个数组
//  O(n) O(1)
function maxSubArray3(nums: number[]): number {
    let preBiggest = 0;
    let biggest = -Infinity;


    for (let j = 0; j < nums.length; j++) {
        preBiggest = Math.max(preBiggest + nums[j], nums[j]);
        biggest = Math.max(biggest, preBiggest);
    }

    return biggest;
};