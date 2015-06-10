/**
 * A class that mergers arrays.
 */
class ArrayMerger {
	/**
	 * default constructor
	 */
	constructor() {
	}

	/**
	 * Merges an unknown number of arrays passed in.
	 * @param  {...[type]} arrays [description]
	 * @return {Array} a merged array made up of all arrays passed in.
	 *
	 * Example: merge([1, 2, 3], [a, b, c]);
	 * Result: [1, a, 2, b, 3, c]
	 */
	merge(...arrays) {
		let i,		
			position = 0,
			merged = [];

		arrays.forEach((array, index) => {
			for (i = 0; i < array.length; i++) {
				position += index;
				merged.splice(position, 0, array[i]);
				position++;
			}

			position = 0;						
		});

		return merged;
	}
}

export { ArrayMerger };