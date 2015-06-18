/**
 * This is a class representing a math library
 */
class MathUtils {
	/**
	 * checks whether a number is a prime number or not.
	 * @param  {Number} number the number to check.
	 * @return {Boolean} true if prime / false if not. 
	 */
	static isPrime(number) {
		//Number.isInteger is part of ES6		
		if (!Number.isInteger(number)) {
			throw new Error('parameter is required and must be a number');
		}

		//0 and 1 are neither prime nor composite numbers.
		if (number === 0 || number === 1) { 
			return false;
		}

		for (let i = 2; i < number; i++) {
			if (number % i === 0) {
				return false;
			}
		}

		return true;
	}

	/**
	 * The power of a number
	 * @param  {Number} base the number
	 * @param  {Number} exponent the exponent
	 * @return {Number} the power of the number 
	 */
	static power(base, exponent) {
		var pow = 1;		
		for (let i = 1; i <= exponent; i++) {
			pow *= base;
		}

		return pow;
	}
}

export default MathUtils;