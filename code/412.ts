/* 
Fizz Buzz
O(n) O(1)

*/

function fizzBuzz(n: number): string[] {
    const answer: string[] = [];
    for (let i = 0; i < n; i++) {
        const v = i+1;
        const fizz = v % 3 === 0;
        const buzz = v % 5 === 0;
        const fizzBuzz = fizz && buzz;
        answer[i] = fizzBuzz ? 'FizzBuzz' : (fizz ? 'Fizz' : (buzz ? 'Buzz' : v + ''))
    }

    return answer;
};

function fizzBuzz2(n: number): string[] {
    const answer: string[] = [];
    for (let i = 0; i < n; i++) {
        const v = i+1;
        let s = '';
        if(v % 3 === 0) s += 'Fizz';
        if(v % 5 === 0) s += 'Buzz';
        if(!s.length) s += v;
        answer[i] = s;
    }

    return answer;
};