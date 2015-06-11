
/**
 * This class forms the largest possible number from an array of non-negative integers.
 */
class LargestArrayNumber {

    /**
     * class constructor
     * @param  {Array} arr an array of non-negative numbers
     */
    constructor(arr) {
        this.arr = arr;       
    }

    /**
     * forms the largest possible array number.
     * @return {number} the largest number.
     */
    formNumber() {
        this.arr.sort((a, b) => {
            return b - a;
        });

        return parseInt(this.arr.join(''));
    } 
}

export { LargestArrayNumber };