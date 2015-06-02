import { StringReverser } from './reverse-string';

describe('StringReverser:', () => {
    
    let reverser = new StringReverser("Hello");

    describe('constructor', () => {
	    it('sets up the reader properties accordingly', () => {	        
	        expect(reverser.str).toBe("Hello");	        
	    });
	});

	describe('reverse()', () => {
	    it('returns the reversed string', () => {	        
	        expect(reverser.reverse()).toEqual("olleH");
	    });
	});
});