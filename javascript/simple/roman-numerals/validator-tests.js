import Validator from './validator';

describe('Validator:', () => {	
	describe('isValidNumber', () => {
		it('returns false if the number is outside the range [1-3999]', () => {
			expect(Validator.isValidNumber()).toBe(false);
			expect(Validator.isValidNumber(-1)).toBe(false);
			expect(Validator.isValidNumber(0)).toBe(false);
			expect(Validator.isValidNumber(4000)).toBe(false);			
		});

		it('returns false if the number is not an integer integer', () => {
			expect(Validator.isValidNumber(2.5)).toBe(false);
			expect(Validator.isValidNumber("1")).toBe(false);
			expect(Validator.isValidNumber('String')).toBe(false);
		});

		it('returns true if the number is a positive integer within range integer integer', () => {
			expect(Validator.isValidNumber(1)).toBe(true);
			expect(Validator.isValidNumber(3999)).toBe(true);
			expect(Validator.isValidNumber(1988)).toBe(true);
		});
	});

	describe('isValidRomanNumeral', () => {
		it('returns false if anything other than a non empty string is passed', () => {
			expect(Validator.isValidRomanNumeral('')).toBe(false);
			expect(Validator.isValidRomanNumeral()).toBe(false);
			expect(Validator.isValidRomanNumeral(1)).toBe(false);
		});

		it('returns false if a non matching pattern is passed', () => {
			expect(Validator.isValidRomanNumeral('MMMM')).toBe(false);
			expect(Validator.isValidRomanNumeral('CCCC')).toBe(false);
			expect(Validator.isValidRomanNumeral('IIII')).toBe(false);
			expect(Validator.isValidRomanNumeral('XXXX')).toBe(false);
		});

		it('returns true if a matching pattern is passed', () => {
			expect(Validator.isValidRomanNumeral('I')).toBe(true);
			expect(Validator.isValidRomanNumeral('IV')).toBe(true);
			expect(Validator.isValidRomanNumeral('MCMLXXXIX')).toBe(true);
			expect(Validator.isValidRomanNumeral('MLXVI')).toBe(true);
		});
	});
});