
// 纵向扫描：技巧是ij循环置换
// 时间复杂度 O(m*n)
// 空间复杂度 O(1)

function longestCommonPrefix1(strs: string[]): string {
    
    let result:string = '';
    let minLen = Number.MAX_SAFE_INTEGER;
    let char = 0;

    const arr = strs.map((str, i, arr) => {
        if(str.length < minLen) minLen = str.length;
        return str.split('');
    });

    for (let j = 0; j < minLen; j++) {
        let same = '';
        for (let i = 0; i < arr.length; i++) {
          const curr = arr[i][j]
          if (i === 0) { same = curr } else if (curr !== same){ return result; }
          if (i === arr.length - 1) result += same;
        }
    }
    
    return result;
};

/*
分治法
时间复杂度 O()
空间复杂度 O()

分析：
注意到LCP的计算满足结合律，LCP(s1~sn) = LCP(LCP(s1~sk), LCP(sk+1~sn));
分治算法核心思想：分解，解决（递归），合并
分治的优点是简化问题以及并行计算，但是缺点是时间复杂度有时较高
*/

function longestCommonPrefix2(strs: string[]): string {
  if (!strs || !strs.length) return '';

  const findLCP = (left: string, right: string): string => {
    const minLength = Math.min(left.length, right.length);
    let i = 0;
    while (i < minLength && left.charAt(i) === right.charAt(i)) i++;
    return left.substring(0, i);
  };

  const findLongestCommonPrefix = (start: number, end: number): string => {
    if (start === end) return strs[start];

    const mid = Math.floor((end - start) / 2) + start;
    const lcpLeft = findLongestCommonPrefix(start, mid);
    const lcpRight = findLongestCommonPrefix(mid + 1, end);
    return findLCP(lcpLeft, lcpRight);
  };

  return findLongestCommonPrefix(0, strs.length - 1);
}



/*
二分查找法
时间复杂度 O()
空间复杂度 O()

分析：
注意到LCP的计算满足结合律，LCP(s1~sn) = LCP(LCP(s1~sk), LCP(sk+1~sn));
*/



const longestCommonPrefix = longestCommonPrefix2;

console.log(longestCommonPrefix(["flower","flow","flight"])); // fl
console.log(longestCommonPrefix(["dog","racecar","car"])); //''
console.log(longestCommonPrefix(["a"])); // 'a'



