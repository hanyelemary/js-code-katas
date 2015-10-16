import NumberOccurrences from './number-occurrences';

describe('NumberOccurrences: ', () => {
	let numberOccurrences = new NumberOccurrences();
	describe('constructor', () => {
		it('creates an instance of the object', () => {
			expect(numberOccurrences).not.toBe(null);
		});
	});


	describe('find()', () => {
		it('returns an error if nothing is passed in', () => {
			expect(() => {
				numberOccurrences.find()
			}).toThrow(new Error('An array of integers is required.'));
		});

		it('returns an error if an empty array is passed in', () => {
			expect(() => {
				numberOccurrences.find([])
			}).toThrow(new Error('An array of integers is required.'));
		});

		it('returns number if array has a single number', () => {
			expect(numberOccurrences.find([2])).toEqual(2);
		});

		it('returns most frequent number within array', () => {
			expect(numberOccurrences.find([2, 3, 5, 4, 3, 3])).toEqual(3);
		});

		it('returns most frequent number within array', () => {
			expect(numberOccurrences.find([2, 3, 2, 2, 3])).toEqual(2);
		});

		it('returns smallest most frequent number if in conflict with others in array', () => {
			expect(numberOccurrences.find([1, 2])).toEqual(1);
		});
	});
});