

function reverseBits(n: number): number {
	let ans = 0;
    for (let i = 0; i < 32 && n > 0; i++) {
        ans |= (n & 1) << (32 - i); // 最右边一位，左移
        n >>>= 1;
    }

    return ans;
};