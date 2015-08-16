# Kata description

The Romans wrote their numbers using letters; specifically the letters 'I' meaning '1', 'V' meaning '5', 'X' meaning '10', 'L' meaning '50', 'C' meaning '100', 'D' meaning '500', and 'M' meaning '1000'. There were certain rules that the numerals followed which should be observed.

The symbols 'I', 'X', 'C', and 'M' can be repeated at most 3 times in a row. The symbols 'V', 'L', and 'D' can never be repeated. The '1' symbols ('I', 'X', and 'C') can only be subtracted from the 2 next highest values ('IV' and 'IX', 'XL' and 'XC', 'CD' and 'CM'). Only one subtraction can be made per numeral ('XC' is allowed, 'XXC' is not). The '5' symbols ('V', 'L', and 'D') can never be subtracted.

## Feature 1
As a game developer
I want to be able to convert a number to a numeral
So that I can label my game releases using Roman numerals

- Given I have started the converter
- When I enter $number
- Then $numeral is returned

### Test Cases

| Numeral         | Number        |
| :-------------: |:-------------:|
| I	   			  | 1             |
| III             | 3             |
| IX	          | 9             |
| MLXVI           | 1066          |
| MCMLXXXIX       | 1989          |