import AnagramStrings from './anagram-strings'

describe('AnagramStrings: ', () => {
	let anagramStrings = new AnagramStrings('orchestra', 'carthorse');
	describe('constructor', () => {
		it('instantiates the instance correctly', () => {
			expect(anagramStrings).not.toBe(true);
		});
	});

	describe('check', () => {

		let varyingLengthsStrings = new AnagramStrings('hi', 'hello'),
			anagramStrings = new AnagramStrings('orchestra', 'carthorse'),
			nonAnagrams = new AnagramStrings('orchestra', 'carthosse');
		
		it('returns false for varying lengths', () => {
			expect(varyingLengthsStrings.check()).toBe(false);
		});

		it('returns true for strings that are anagrams', () => {
			expect(anagramStrings.check()).toBe(true);
		});

		it('returns false for strings that are NOT anagrams', () => {
			expect(nonAnagrams.check()).toBe(false);
		});
	});
});