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

		it('returns an error if nothing is passed in', () => {
			expect(() => {
				numberOccurrences.find([])
			}).toThrow(new Error('An array of integers is required.'));
		});

		it('returns the number if the array has a single number', () => {
			expect(numberOccurrences.find([2])).toEqual(2);
		});

		// it('')
	});
});