/**
 Do not return anything, modify matrix in-place instead.
 */
 function setZeroes(matrix: number[][]): void {
    const rows = new Set();
    const columns = new Set();
    matrix.forEach((row, i) => {
        row.forEach((v, j) => {
            if(v === 0) {
                rows.add(i);
                columns.add(j)
            }
        })
    })

    matrix.forEach((row, i) => {
        row.forEach((v, j) => {
            if(v !== 0 && rows.has(i) || columns.has(j)) {
                matrix[i][j] = 0;
            }
        })
    })
 };