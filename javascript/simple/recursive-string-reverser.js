
/**
 * This class represents a recursive string reverser.
 */
class RecursiveStringReverser {
    /**
     * default constructor
     */
    constructor() {
        this.reversed = '';
    }

    /**
     * recursively reverses a string.
     * @param {String} str the string to reverse
     * @return {String} the reversed string
     */
    reverse(str) {  
        let length = str.length      
        if (str.length === 0) {
            return this.reversed;
        } else {
            this.reversed += str[length - 1];        
            return this.reverse(str.substring(0, length - 1));
        }
    } 
}

export { RecursiveStringReverser };