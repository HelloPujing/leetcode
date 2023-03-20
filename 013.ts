

// I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
// X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
// C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900
// 
function romanToInt1(s: string): number {
    const m1 = new Map([
        ['I', 1], 
        ['V', 5], 
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]);
    const m2 = new Map([
        ['IV', 4],
        ['IX', 9],
        ['XL', 40],
        ['XC', 90],
        ['CD', 400],
        ['CM', 900],
    ]);

    let result = 0;
    let p = 0;
    while (p <= s.length - 1) {
        const sub2 = s.substring(p, p + 2);
        const sub1 = s.charAt(p);
        if(m2.has(sub2)) {
            result = result + m2.get(sub2)!;
            p = p + 2;
        }else{
            result = result + m1.get(sub1)!;
            p++;
        }
    }

    return result;
};

const romanToInt = romanToInt1;
console.log(romanToInt('IV'));
console.log(romanToInt('IX'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));

// 4
// 9
// 58
// 1994
