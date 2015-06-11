import { LargestArrayNumber } from './largest-array-number';

describe('LargestArrayNumber: ', () => {

	let arr = [20, 3, 59, 0, 12],
		expectedNumber = 59201230,
		largestArrayNumber = new LargestArrayNumber(arr);

	describe('constructor', () => {
		it('instantiates the object properly', () => {
			expect(largestArrayNumber).not.toBe(null);
		});		
	});

	describe('formNumber', () => {
		it('forms the largest number from the array', () => {
			expect(largestArrayNumber.formNumber()).toEqual(expectedNumber);
		});
	})
});