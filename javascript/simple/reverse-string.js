
/**
 * This class represents a string reverser.
 */
class StringReverser {

    /**
     * class constructor
     * @param  {String} str the string to reverse
     */
    constructor(str) {
        this.str = str;       
    }

    /**
     * reverses the string.
     * @return {String} the reversed string
     */
    reverse() {
        let i = (this.str.length - 1), 
            reversed = "";

        for (i; i >= 0; i--) {
            reversed += this.str[i];  
        }

        return reversed;	
    } 
}

export { StringReverser };