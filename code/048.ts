
/* 
矩阵旋转 = 翻转+镜像
*/
function rotateMatrix(matrix: number[][]): void {
    // 上下翻转
    for (let i = 0; i <= Math.floor((matrix.length - 1) / 2); i++) {
        for (let j = 0; j < matrix.length; j++) {
            [matrix[i][j], matrix[matrix.length - 1 - i][j]] = [matrix[matrix.length - 1 - i][j], matrix[i][j]];
        }
    }
    console.log(matrix);
    // 对角线翻转
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 0; j <= i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
};

