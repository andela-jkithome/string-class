# string-class
Checkpoint 2 String class extension.

HOW TO RUN:
Install jasmine node and run npm at the toot of the folder.

MODULE EXPLANATIONS:

hasVowels
It uses a regular expressions to check whether there are any vowels in the 
string and returns true if present or false if absent.

toUpper
It loops through the string and uses a regular expression to check for lowercase letters. It converts 
the lowercase letters to upppercase if they are found and leaves everything else as it was before.

toLower
It loops through the string and uses a regular expression to check for uppercase 
letters. It converts the uppercase letters to lowercase if they are found and
leaves everything else as it was before.

ucFirst
It changes the first character of a string(index 0) to uppercase using the toUpper method.

isQuestion
it uses a regular expression to test whether the end of input(provided string) has a question mark. 
It returns true if the question mark is present and false if it is not.

words
It takes a provide string and replaces all punctuations marks with an empty string. It then splits 
the string at the spaces to give an array whose elements are the words in the string.

wordCount
The string that is passed to this method is first turned into an array using the words method to find 
the words in the string. After the array is obtained, the length of the array is returned as the result.

toCurrency
This method first checks whether the string has a decimal point and if it does it splits it at the 
decimal point. It then uses a regular expression with two lookahead assertions. The first a positive 
one looks at any point in the string if they are multiples of three digits in a row after it. The 
negative assertion makes sure that the given point only has exactly a multiple of three digits. 
The replacement expression puts a comma there. Once this is complete, it reattaches the decimal 
portion of the string. If the string doesn't have a decimal portion, it adds the commas and then attaches
.00 to the end.

fromCurrency
It replaces all the commas in the string and then converts it to a floating point number. It then 
converts it to a string to remove insignificant decimal zeros and then converts it back to a floating 
point number.


