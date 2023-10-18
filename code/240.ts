/* 
240. 搜索二维矩阵 II

编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：

每行的元素从左到右升序排列。
每列的元素从上到下升序排列。


*/

function searchMatrix(matrix: number[][], target: number): boolean {
    const m = matrix.length; // 行
    const n = matrix[0].length; // 列
    for (let i = 0; i < m && target >= matrix[i][0]; i++) { // 确定列数，然后每一列二分
        const index = midSearch(matrix[i], target);
        // console.log(i + '行：')
        if (index != -1) return true;
    }
    return false;
};

function midSearch(arr: number[], target: number): number {
    // console.log(arr);
    if (arr.length === 0) return -1;

    let start = 0, end = arr.length - 1;
    while (start <= end) {
        const mid = Math.floor(start + (end - start) / 2);
        // console.log(mid, arr[mid]);
        if (arr[mid] === target) return mid;
        if (arr[mid] > target) return midSearch(arr.slice(0, mid), target);
        if (arr[mid] < target) return midSearch(arr.slice(mid + 1, arr.length), target);
    }

    return -1;
}

console.log(searchMatrix([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 5))