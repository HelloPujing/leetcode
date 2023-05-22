/* 
买卖股票的最佳时机1

暴力法：两层遍历

*/

// 方法一：递归，超时
function maxProfit1(prices: number[]): number {
    if(prices.length <= 1) return 0;
    if(prices.length === 2) return prices[0] < prices[1] ? prices[1] - prices[0] : 0;

    const [price0] = prices.splice(0, 1);
    const max = Math.max(...prices);
    const subMaxProfit = maxProfit(prices);
    return max - price0 > subMaxProfit ? max - price0 : subMaxProfit;
};


// 方法二：O(n) O(1)
// 一次遍历，动态定位当前最小值，并计算差值
function maxProfit(prices: number[]): number {
    let curMin = Infinity;
    let ans = 0;

    for (let i = 0; i < prices.length; i++) {
        const v = prices[i];
        if(v < curMin) curMin = prices[i];
        if(v - curMin > ans) ans = v - curMin;
    }

    return ans;
};