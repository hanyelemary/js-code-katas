
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
            throw new Error('parameter is required and must be a number');
        }        
    }
}

export default Converter;