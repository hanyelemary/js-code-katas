import Converter from './converter';

describe('Converter:', () => {

	it('throws an error when nothing is passed to the converting function', () => {
		expect(() => {
			Converter.numberToNumeral()
		}).toThrow(
			new Error('parameter is required and must be a number')
		);
	});

	it('throws an error when a non integer param is passed to the converting function', () => {
		expect(() => {
			Converter.numberToNumeral("some string")
		}).toThrow(
			new Error('parameter is required and must be a number')
		);
	});
});