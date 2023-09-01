/* 
单词搜索：
给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。
单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

*/

function aroundExist(board: string[][], i: number, j: number, letter: string, visitedIndex: Set<string>): [boolean, number, number] { //  存在则返回ij
    let isExist = false;
    let targetI = -1;
    let targetJ = -1;
    let ij = '';

    // 上：i - 1，j
    // 下：i + 1， j
    // 左：i, j - 1
    // 右：i, j + 1
    // 注：只要判断i的边界就行，j超过边界返回undefined

    let upI = i - 1, upJ = j;
    ij = `${upI}${upJ}`;
    if (!visitedIndex.has(ij) && upI >= 0 && board[upI][upJ] === letter) {
        visitedIndex.add(ij);
        isExist = true;
        targetI = upI;
        targetJ = upJ
    }

    let bottomI = i + 1, bottomJ = j;
    ij = `${bottomI}${bottomJ}`;
    if (!visitedIndex.has(ij) && bottomI < board.length && board[bottomI][bottomJ] === letter) {
        visitedIndex.add(ij);
        isExist = true;
        targetI = bottomI;
        targetJ = bottomJ
    }

    let leftI = i, leftJ = j - 1;
    ij = `${leftI}${leftJ}`;
    if (!visitedIndex.has(ij) && board[leftI][leftJ] === letter) {
        visitedIndex.add(ij);
        isExist = true;
        targetI = leftI;
        targetJ = leftJ
    }

    let rightI = i, rightJ = j + 1;
    ij = `${rightI}${rightJ}`;
    if (!visitedIndex.has(ij) && board[rightI][rightJ] === letter) {
        visitedIndex.add(ij);
        isExist = true;
        targetI = rightI;
        targetJ = rightJ
    }

    console.log(i, j, letter, isExist, targetI, targetJ);
    return [isExist, targetI, targetJ]
}

function exist(board: string[][], word: string): boolean {
    // let isExist = false;

    const firstLetter = word.charAt(0);
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const v = board[i][j];
            let wordIndex = 1;
            if (v === firstLetter) {
                let isCharExist = true;
                let prevI = i, prevJ = j;
                const visitedIndex = new Set<string>(); // ij 
                visitedIndex.add(`${i}${j}`);
                while (isCharExist && wordIndex < word.length) {
                    const targetChar = word.charAt(wordIndex);
                    [isCharExist, prevI, prevJ] = aroundExist(board, prevI, prevJ, targetChar, visitedIndex);
                    wordIndex++;
                }
                if (isCharExist) return true
            }
        }
    }

    return false;
};

const test1 = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]];
exist(test1, "ABCB");