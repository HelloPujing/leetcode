
// 哈希 O(m+n) O(min(m+n))
function intersect(nums1: number[], nums2: number[]): number[] {
    if(nums1.length > nums2.length) return intersect(nums2, nums1);

    const map = new Map();
    let ans: number[] = [];

    nums1.forEach(v => {
        if(map.has(v)){
            map.set(v, map.get(v) + 1);
        }else{
            map.set(v, 1);
        }
    })


    nums2.forEach(v => {
        if(map.has(v)) {
            ans = ans.concat(v);
            const count = map.get(v) - 1;
            if(count === 0) {
                map.delete(v)
            }else{
                map.set(v,  count);
            }
        }
    })

    return ans;
};


// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2,2]

// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[4,9]

console.log(intersect([1,2,2,1], [2,2]));
