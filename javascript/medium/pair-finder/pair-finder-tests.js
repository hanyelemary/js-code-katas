import PairFinder from './pair-finder';

describe('PairFinder:', () => {

	let pairFinder = new PairFinder([4, 5, 7, 9, -4, -1, -6, 2, 1], 3);
	
	describe('constructor:', () => {
		it('should instantiate the object correctly', () => {
			expect(pairFinder).not.toBe(null);			
		});

		it('should sort the array accordingly', () => {
			expect(pairFinder.array).toEqual([-6, -4, -1, 1, 2, 4, 5, 7, 9]);
		});
	});	
});