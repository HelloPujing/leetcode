/*

给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
此外，你可以假设该网格的四条边均被水包围。

思路：
- DFS,递归
- 二维网格看成无向图，垂直、水平相邻的1之间有边
- 遍历所有元素，有1就count++, 并把其范围内陆地都设置为0（递归）
- 时间O(MN) 空间O(MN)-最差情况为所有范围都是陆地

- BFS
- BFS无论二叉树还是循环数组，都用队列
*/


// 网格dfs套路，dfs（grid, i, j）// 判断边界inArea，访问四个方向
function numIslands_dfs(grid: string[][]): number {
  let count = 0;
  const iSize = grid.length;
  const jSize = grid[0].length;

  const inArea = (i: number, j: number) => i < iSize && j < jSize;

  const dfs = (grid: string[][], i: number, j: number) => {
    if (!inArea) return; // 判断base case
    console.log(iSize, jSize, i, j)

    if (grid && grid[i] && grid[i][j] === '1') {
      grid[i][j] = '2'; // 标记为已访问 
      dfs(grid, i - 1, j); // 访问相邻节点
      dfs(grid, i + 1, j);
      dfs(grid, i, j - 1);
      dfs(grid, i, j + 1);
    }
  }

  for (let i = 0; i < grid.length; i++) { // 循环
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      const v = grid[i][j];
      if (v === '1') { // dfs
        count++;
        dfs(grid, i, j)
      }
    }
  }

  return count;
};

console.log(numIslands_dfs([['1', '0', '1']]))


// bfs套路 quee
function numIslands_bfs(grid: string[][]): number {
  let count = 0;
  const iSize = grid.length;
  const jSize = grid[0].length;

  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      const v = grid[i][j];
      if (v === '1') {
        count++;

        // bfs
        const q = [];
        q.push([i, j]);
        while (q.length) {
          const size = q.length;

          for (let x = 0; x < q.length; x++) {
            const [i, j] = q[x] as number[];
            if (grid[i][j] === '1') {
              grid[i][j] = '2';

              if (i - 1 >= 0 && grid[i - 1][j] === '1') q.push([i - 1, j])
              if (i + 1 < iSize && grid[i + 1][j] === '1') q.push([i + 1, j])
              if (j - 1 >= 0 && grid[i][j - 1] === '1') q.push([i, j - 1])
              if (j + 1 < jSize && grid[i][j + 1] === '1') q.push([i, j + 1])
            }
          }
          q.splice(0, size)
        }
      }
    }
  }

  return count;
};

