import Converter from './converter';

describe('Converter:', () => {	

	describe('numberToNumeral - negative test cases', () => {
		it('throws an error when nothing is passed to the converting function', () => {
			expect(() => {
				Converter.numberToNumeral()
			}).toThrow(
				new Error('parameter is required and must be a positive number')
			);
		});

		it('throws an error when a non integer param is passed to the converting function', () => {
			expect(() => {
				Converter.numberToNumeral("some string")
			}).toThrow(
				new Error('parameter is required and must be a positive number')
			);
		});

		it('throws an error when a negative integer param is passed to the converting function', () => {
			expect(() => {
				Converter.numberToNumeral(-5)
			}).toThrow(
				new Error('parameter is required and must be a positive number')
			);
		});
	});	

	describe('numberToNumeral - positive test cases', () => {
		it('converts the number to numeral', () => {
			expect(Converter.numberToNumeral(1)).toEqual("I");
			expect(Converter.numberToNumeral(3)).toEqual("III");
			expect(Converter.numberToNumeral(9)).toEqual("IX");
			expect(Converter.numberToNumeral(1066)).toEqual("MLXVI");
			expect(Converter.numberToNumeral(1989)).toEqual("MCMLXXXIX");
		});		
	});		
});