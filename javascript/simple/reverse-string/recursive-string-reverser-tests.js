import { RecursiveStringReverser } from './recursive-string-reverser';

describe('StringReverser:', () => {
    
    let reverser = new RecursiveStringReverser();

    describe('constructor', () => {	        
	    it('sets up the instance properties accordingly', () => {	        
	        expect(reverser).not.toBe(null);	        
	    });
	});

	describe('reverse()', () => {
	    it('returns the reversed string', () => {	        
	        expect(reverser.reverse("Hello")).toEqual("olleH");
	    });
	});
});