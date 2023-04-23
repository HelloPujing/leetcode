function plusOne(digits: number[]): number[] {
     for (let i = digits.length - 1; i >= 0; i--) {
        const v = digits[i];
        if(v === 9) {
            digits[i] = 0; // 进位
        }else{
            digits[i]++;
            return digits;
        }
     }

     digits.unshift(1)
     return digits; // 进位到最后一位
};