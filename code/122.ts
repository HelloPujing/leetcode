/* 
买卖股票的最佳时机2 
分析：每一个连续下降通道，末尾买；每一个连续上升通道末尾卖
O(n) O(1)
*/

// 遍历
function maxProfit1(prices: number[]): number {
    let total = 0;
    let start = Infinity;

    for (let i = 0; i < prices.length; i++) {
        const v = prices[i];
        if(prices[i] < start) { // 在下降，记录start值
            start = v;
        } else if (v > start) { // 在上升
            if (i === prices.length - 1 || prices[i + 1] < v) { // 最后一个，或者下一个进入下降通道，直接追加
                total += (v - start);
                start = Infinity;
            }
        }
    }

    return total;
};

// 贪心算法，只能算最大利润，不是实际交易
function maxProfit2(prices: number[]): number {
    let total = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        total += Math.max(0, prices[i + 1] - prices[i]);
    }

    return total;
};
