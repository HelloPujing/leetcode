/* 
单词搜索：
给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。
单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

*/



function isAroundExist(board: string[][], i: number, j: number, letter: string, visitedIndex: Set<string>): boolean { //  存在则返回ij
    let isExist = false;
    let ij = `${i}${j}`;

    // 注：只要判断i的边界就行，j超过边界返回undefined
    if (!visitedIndex.has(ij) && i >= 0 && i < board.length && board[i][j] === letter) {
        visitedIndex.add(ij);
        isExist = true;
    } else {
        visitedIndex.delete(ij);
    }

    console.log(visitedIndex, i, j, letter, isExist);
    return isExist;
}

function isWordExist(board: string[][], i: number, j: number, word: string, visitedIndex: Set<string>): boolean { // i j 为起始点
    if (!word) return true;

    const currentLetter = word.charAt(0);
    let exist = false;

    if (isAroundExist(board, i - 1, j, currentLetter, visitedIndex)) exist = exist || isWordExist(board, i - 1, j, word.substring(1), visitedIndex);
    if (isAroundExist(board, i + 1, j, currentLetter, visitedIndex)) exist = exist || isWordExist(board, i + 1, j, word.substring(1), visitedIndex);
    if (isAroundExist(board, i, j - 1, currentLetter, visitedIndex)) exist = exist || isWordExist(board, i, j - 1, word.substring(1), visitedIndex);
    if (isAroundExist(board, i, j + 1, currentLetter, visitedIndex)) exist = exist || isWordExist(board, i, j + 1, word.substring(1), visitedIndex);

    visitedIndex.delete(`${i}${j}`); //!!!
    return exist;
}

function exist(board: string[][], word: string): boolean {
    let isExist = false;

    const firstLetter = word.charAt(0);
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const v = board[i][j];
            let wordIndex = 1; // 目标词汇的第几个字母
            if (v === firstLetter) { // 找到首字母开头的位置i j，查看目标词汇是否存在
                const visitedIndex = new Set<string>(); // ij，记录遍历过的字符
                visitedIndex.add(`${i}${j}`);
                isExist = isWordExist(board, i, j, word.substring(1), visitedIndex);
                if (isExist) return true; // 避免有两个首字母开头，一个通过，一个不通过；通过则直接返回
            }
        }
    }

    return isExist;
};

const test1 = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]];
exist(test1, "ABCB");