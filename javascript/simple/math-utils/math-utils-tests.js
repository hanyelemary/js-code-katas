import MathUtils from './math-utils'

describe('MathUtils: ', () => {
	describe('isPrime', () => {

		it('throws an error when nothing is passed into the function', () => {
			let number = 7;
			expect(() => {
				MathUtils.isPrime()
			}).toThrow(
				new Error('parameter is required and must be a number')
			);
		});

		it('returns false when the number is 1 or 0', () => {
			expect(MathUtils.isPrime(0)).toBe(false);
			expect(MathUtils.isPrime(1)).toBe(false);
		});

		it('returns true when the number is prime', () => {
			expect(MathUtils.isPrime(2)).toBe(true);
			expect(MathUtils.isPrime(3)).toBe(true);
			expect(MathUtils.isPrime(5)).toBe(true);
			expect(MathUtils.isPrime(7)).toBe(true);
			expect(MathUtils.isPrime(13)).toBe(true);
			expect(MathUtils.isPrime(17)).toBe(true);
		});

		it('returns false when the number is not prime', () => {
			expect(MathUtils.isPrime(4)).toBe(false);
			expect(MathUtils.isPrime(6)).toBe(false);
			expect(MathUtils.isPrime(8)).toBe(false);
			expect(MathUtils.isPrime(9)).toBe(false);
			expect(MathUtils.isPrime(10)).toBe(false);
		});
	});

	describe('power', () => {		
		it('returns the correct power of a number', () => {
			expect(MathUtils.power(2, 3)).toEqual(8);
			expect(MathUtils.power(2, 4)).toEqual(16);
			expect(MathUtils.power(2, 5)).toEqual(32);
		});
	});
});