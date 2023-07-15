
/* 
O(nklogk) O(nk)
*/

function groupAnagrams(strs: string[]): string[][] {
    const ans = new Array();
    
    const map = new Map<string, number>();
    strs.forEach(str => {
        const fmtStr = str.split('').sort().join();
        if(map.has(fmtStr)) {
            const index = map.get(fmtStr)!;
            ans[index].push(str);
        }else{
            const newIndex = ans.length;
            map.set(fmtStr, newIndex);
            ans[newIndex] = new Array(str);
        }
    })

    return ans;
};


function groupAnagrams2(strs: string[]): string[][] { 
    const map = new Map<string, string[]>();
    strs.forEach(str => {
        const key = str.split('').sort().join();
        if(map.has(key)) {
            map.get(key)!.push(str);
        }else{
            map.set(key, [str]);
        }
    })

    return Array.from(map.values());
};