
/**
 * A class that finds and returns the number with the highest occurrences in a given array.
 */
class NumberOccurrences {
	/**
	 * default constructor
	 */
	constructor() {		
	}

	/**
	 * Finds a number with highest occurrence within an array of integers.
	 * @param  {Array} array an array of integers
	 * @return {Number} the number with the highest occurrence in the array
	 */
	find(array) {
		if (array == undefined || !array || array.length == 0) {
			throw new Error('An array of integers is required.');
		} else if (array.length === 1) {
			return array[0];
		}
	}

};


export default NumberOccurrences;