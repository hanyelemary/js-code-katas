
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

	static isValidRomanNumeral(romanNumeral) {
		return typeof(romanNumeral) === 'string' && romanNumeral.length !== 0;
	}	
}

export default Validator;