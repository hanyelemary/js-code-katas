
/**
 * This is a converter from a number to numeral and vice versa.
 */
class Converter {
    /**
     * function to convert a number into a roman numeral.
     * @param  {Integer} number a valid, non-negative integer.
     * @return {String} a roman numeral.
     */
    static numberToNumeral(number) {
        
        if (!Number.isInteger(number) || number <= 0) {
            throw new Error('parameter is required and must be a positive number');
        }

        let numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
            romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'],
            i = 0,
            length = numbers.length,
            romanNumeral = '';

        for (; i < length; i++) {
            while (number >= numbers[i]) {
                romanNumeral = romanNumeral + romanNumerals[i];
                number = number - numbers[i];
            }
        }

        return romanNumeral;
    }
}

export default Converter;