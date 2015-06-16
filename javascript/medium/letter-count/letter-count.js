/**
 * A class that returns the word with the most repeated letters.
 */
class LetterCount {
	/**
	 * Default constructor
	 * @param  {String} string a string forming a sentence.
	 */
	constructor(string = '') {
		this.string = string;
		this.words = this.decomposeString();
	}

	/**
	 * Decomposes a sentence (string) into an array of words.
	 * @return {Array} an array of words.
	 */
	decomposeString() {
		return this.string.split(' ');
	}

	/**
	 * Returns the count of repeated letters in a word.
	 * @param  {String} word a single word.
	 * @return {Number} the count of repeated letters.
	 */
	repeatedLetterCount(word) {
		var i = 0,
			j = 0,
			count = 0,
			length = word.length;

		for ( ; i < length; i++) {
			for (j = i + 1; j < length; j++) {
				if (word[i] === word[j]) {
					count++;
				}
			}
		}

		return count;
	}

	/**
	 * Finds the word with the most repeated letters.
	 * @return {String} the word with the most repeated letters.
	 */
	findWord() {
		var i = 0,
			length = this.words.length,
			word = '';

		for ( ; i < length; i++) {
			if (this.repeatedLetterCount(this.words[i]) !== 0) {
				if (this.repeatedLetterCount(this.words[i]) > this.repeatedLetterCount(word)) {
					word = this.words[i];
				}
			}
		}

		return word;
	}
}

export { LetterCount };