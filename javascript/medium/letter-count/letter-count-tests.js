import { LetterCount  } from './letter-count'

describe('LetterCount: ', () => {
		
	describe('constructor with default value', () => {

		let letterCount = new LetterCount();

		it('instantiates the instance properly', () => {
			expect(letterCount).not.toBe(null);			
		});

		it('decomposes the string into an empty array', () => {
			expect(letterCount.words).toEqual(['']);
		});
	});

	describe('constructor', () => {

		let letterCount = new LetterCount('Today, is the greatest day ever!');

		it('instantiates the instance properly', () => {
			expect(letterCount).not.toBe(null);			
		});

		it('decomposes the string into an array of words', () => {
			expect(letterCount.words).toEqual(['Today,', 'is', 'the', 'greatest', 'day', 'ever!']);
			expect(letterCount.words.length).toEqual(6);			
		});
	});

	describe('repeatedLetterCount', () => {
		
		let letterCount = new LetterCount('Today, is the greatest day ever!');

		it('returns the number of repeated letters in a word', () => {
			expect(letterCount.repeatedLetterCount('word')).toEqual(0);

			expect(letterCount.repeatedLetterCount('greatest')).toEqual(2);
		});
	});

	describe('findWord', () => {
		
		let letterCount = null;

		it('returns the word with the most repeated letters - middle', () => {
			letterCount = new LetterCount('Today, is the greatest day ever!');
			expect(letterCount.findWord()).toBe('greatest');
		});

		it('returns the word with the most repeated letters - boundary - beginning', () => {
			letterCount = new LetterCount('Little vacuum');
			expect(letterCount.findWord()).toBe('Little');
		});		

		it('returns the word with the most repeated letters - boundary - ending', () => {
			letterCount = new LetterCount('Hi there');
			expect(letterCount.findWord()).toBe('there');
		});

		it('returns the first word when equal repetitive letters encountered', () => {
			letterCount = new LetterCount('Hello there');
			expect(letterCount.findWord()).toBe('Hello');
		});

		it('returns an empty string when no letter repitition is found', () => {
			letterCount = new LetterCount('no words');
			expect(letterCount.findWord()).toBe('');
		});

		it('returns an empty string when dealing with an empty string', () => {
			letterCount = new LetterCount('');
			expect(letterCount.findWord()).toBe('');
		});
	});
});