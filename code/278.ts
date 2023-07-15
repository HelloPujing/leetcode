/* 第一个错误的版本 */

/* 
二分查找
*/
var solution = function(isBadVersion: any) {
    return function(n: number): number {
        if(n === 1 || isBadVersion(1)) return 1;

        let i = 1, j = n; // 找到 false true 相邻, 或者true true
        while(j - i > 1){
            const mid = Math.floor((i + j) / 2);
            if(isBadVersion(mid)) {
                j = mid;
            }else{
                i = mid;
            }
        }  

        return j;
    };
};

