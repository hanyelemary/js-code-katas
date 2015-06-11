import { ArrayMerger } from './array-merger'

describe('ArrayMerger:', () => {
	let merger = new ArrayMerger();

	describe('constructor', () => {
		it('instantiates the object properly', () => {			
			expect(merger).not.toBe(null);
		});		
	});

	describe('merge()', () => {
		
		it('returns the array back if a single array is passed in', () => {
			let list = merger.merge([1, 2, 3]);
			expect(list).toEqual([1, 2, 3]);
		});

		it('returns an empty array if nothing is passed in', () => {
			let list = merger.merge();
			expect(list).toEqual([]);
		});

		it('merges arrays together', () => {
			let list = merger.merge([1, 2, 3], ['a', 'b', 'c']);
			expect(list).toEqual([1, 'a', 2, 'b', 3, 'c']);
		});

		it('merges arrays together when longer arrays are passed', () => {
			let list = merger.merge([1, 2, 3], ['a', 'b', 'c', 'd', 'e', 'f']);
			expect(list).toEqual([1, 'a', 2, 'b', 3, 'c', 'd', 'e', 'f']);
		});

		it('merges 3 arrays together', () => {
			let list = merger.merge([1, 2, 3], ['a', 'b', 'c'], ['~', '~', '~']);
			expect(list).toEqual([1, 'a', '~', 2, 'b', '~', 3, 'c', '~']);
		});

		it('merges arrays of varying lengths together', () => {
			let list = merger.merge([1, 2, 3], ['a', 'c'], ['~', '~', '~']);
			expect(list).toEqual([1, 'a', '~', 2, 'c', '~', 3, '~']);
		});
	});
});