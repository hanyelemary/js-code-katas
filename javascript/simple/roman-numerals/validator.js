
/**
 * This class represents a validator for the numbers to be converted.
 * Numbers have to be positive integers between 1 - 3999
 */
class Validator {

	/**
	 * function to determine whether a number is a valid positive integer within range.
	 * @param  {Integer} number a positive integer.
	 * @return {Boolean} a true/false.
	 */
	static isValidNumber(number) {
		return (Number.isInteger(number) && (number >= 1 && number <= 3999));
	}

	/**
	 * A convenience function to negate isValidNumber()
	 * @param  {Integer} number a positive integer.
	 * @return {Boolean} a true/false.
	 */
	static isNotValidNumber(number) {
		return !this.isValidNumber(number);
	}

	/**
	 * function to determine whether a roman numeral is valid.
	 * @param  {String}  romanNumeral a roman numeral as in V, III, etc.
	 * @return {Boolean} true/false
	 */
	static isValidRomanNumeral(romanNumeral) {

		function isValidString() {
			return typeof(romanNumeral) === 'string' && romanNumeral.length !== 0;
		}

		function isValidPattern() {
			let pattern = /^M{0,3}(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/;
			return pattern.test(romanNumeral);
		}

		return (isValidString() && isValidPattern());		
	}

	/**
	 * A convenience function that negates isValidRomanNumeral
	 * @param  {String}  romanNumeral a roman numeral as in V, III, etc.
	 * @return {Boolean} true/false
	 */
	static isNotValidRomanNumeral(romanNumeral) {
		return !this.isValidRomanNumeral(romanNumeral);
	}	
}

export default Validator;