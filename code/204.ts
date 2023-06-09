/* 
计算质数
一个数除了1和它本身，不能被其他数整除。n % m != 0
但是不需要把每个小于它的m都试一遍，只需要试能不能被质数整除
那么，如果把质数都存下来，那如果能被质数整除，就不是质数
*/
function countPrimes(n: number): number {
    if(n === 0 || n === 1) return 0;
    
    // 2 3 5 7 11 13
    let count = 0;
    const primes: number[] = [];

    for (let v = 2; v < n; v++) {
        const notPrime = primes.some(prime => v % prime === 0);
        if(!notPrime) {
            count++;
            primes.push(v);
        }
    }
    return count;
};

function countPrimes2(n: number): number {
    const isPrime = new Array(n).fill(1);
    let ans = 0;
    for (let i = 2; i < n; ++i) {
        if (isPrime[i]) {
            ans += 1;
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = 0;
            }
        }
    }
    return ans;
};