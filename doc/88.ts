/* 合并两个有序数组 */
// O(m+n) O(m)
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    const arr1 = nums1.slice(0, m);
    for (let index = 0, i = 0, j = 0; index < nums1.length; index++) {
        const a = arr1[i];
        const b = nums2[j];

        if(j === n || a <= b){
            nums1[index] = a;
            i++;
        } else if(i === m || a > b){
            nums1[index] = b;
            j++;
        }
    }
};

// 从后往前插入，直到nums2都插完
function merge2(nums1: number[], m: number, nums2: number[], n: number): void {
    for (let index = m + n - 1, i = m - 1, j = n - 1; j >= 0; index--) {
        const a = nums1[i];
        const b = nums2[j];

        if(j === -1 || a >= b) {
            nums1[index] = a;
            i--;
        }else if(i === -1 || b > a){
            nums1[index] = b;
            j--;
        }
        console.log(nums1);
    }
};

merge2([1,2,3,0,0,0], 3, [2,5,6], 3);