/* 合并两个有序数组 */

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