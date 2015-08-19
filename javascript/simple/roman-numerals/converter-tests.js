import Converter from './converter';

describe('Converter:', () => {	

	describe('numberToNumeral', () => {
		let expectedMessage = 'parameter is required and must be a positive integer between [1-3999]';
		describe('failed conversion due to validation', () => {
			it('throws an error when nothing is passed to the converting function', () => {
				expect(() => {
					Converter.numberToNumeral()
				}).toThrow(
					new Error(expectedMessage)
				);
			});

			it('throws an error when a non integer param is passed to the converting function', () => {
				expect(() => {
					Converter.numberToNumeral("some string")
				}).toThrow(
					new Error(expectedMessage)
				);
			});

			it('throws an error when a negative integer param is passed to the converting function', () => {
				expect(() => {
					Converter.numberToNumeral(-5)
				}).toThrow(
					new Error(expectedMessage)
				);
			});
		});	

		describe('successful conversion', () => {
			it('converts the number to numeral', () => {
				expect(Converter.numberToNumeral(1)).toEqual("I");
				expect(Converter.numberToNumeral(3)).toEqual("III");
				expect(Converter.numberToNumeral(9)).toEqual("IX");
				expect(Converter.numberToNumeral(1066)).toEqual("MLXVI");
				expect(Converter.numberToNumeral(1989)).toEqual("MCMLXXXIX");
			});		
		});
	});

	describe('romanNumeralToNumber', () => {
		let expectedMessage = 'parameter is required and must be a valid roman numeral';
		describe('failed conversion due to validation', () => {
			it('throws an error when nothing is passed to the converting function', () => {
				expect(() => {
					Converter.romanNumeralToNumber()
				}).toThrow(
					new Error(expectedMessage)
				);
			});
		});	
	});	
});