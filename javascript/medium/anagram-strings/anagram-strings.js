/**
 * This class determines of two strings are anagrams
 * Here is an example: "orchestra", "carthorse"
 */
class AnagramStrings {
	
	/**
	 * default constructor
	 * @param  {String} string1 the first string
	 * @param  {String} string2 the second string
	 */
	constructor(string1, string2) {
		this.string1 = string1;
		this.string2 = string2;
	}

	/**
	 * Checks whether the strings are anagrams
	 * @return {Boolean} true if they are / false if they are not.
	 */
	check() {
		let str1 = this.string1,
			str2 = this.string2;

		if (str1.length !== str2.length) {
			return false;
		} else {
			//split the strings into an array of characters.
			//sort the array
			//join the array back into a string
			str1 = str1.split('').sort().join('');
			str2 = str2.split('').sort().join('');
		
			if (str1 === str2) {
				return true;
			} else {
				return false;
			}
		}
	}
}

export default AnagramStrings;