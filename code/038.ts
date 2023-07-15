/* 外观数列 */

function countAndSay(n: number): string {
    if(n === 1) return '1';

    let ans = '';
    const pre = countAndSay(n - 1);
    
    let currentV = '';
    let currentN = 0;

    for (let i = 0; i <= pre.length; i++) {
        const v = pre[i];

        if(currentN === 0){
            currentV = v;
            currentN = 1;
        } else if(v !== currentV){
            ans += `${currentN}${currentV}`;
            currentV = v;
            currentN = 1;
        } else if(v === currentV){
            currentN++
        }
    }

    return ans;
};

countAndSay(4);