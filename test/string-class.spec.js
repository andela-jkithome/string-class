(function() {
  'use strict';
  require('../lib/string-class.js');

  describe('string class extension tests', function() {

    describe('has vowels', function() {
      // Check whether the string has vowels
      it('Returns the correct output', function() {
        expect('the truth will set you free'.hasVowels()).toBeDefined();
        expect('the truth will set you free'.hasVowels()).toBe(true);
        expect('yamaha'.hasVowels()).toBeTruthy();
        expect(typeof 'the truth will set you free'.hasVowels()).toBe('boolean');
        expect('yzf'.hasVowels()).toBe(false);
        expect('yzf'.hasVowels()).toBeFalsy();
      });
    });

    describe('to upper', function() {
      // Check whether a string is converted to uppercase.
      it('Returns the correct output for different strings', function() {
        expect('asgsf'.toUpper()).toBeDefined();
        expect('uieywr'.toUpper()).not.toBeUndefined();
        expect('jeremy'.toUpper()).toBeTruthy();
        expect('superheroes'.toUpper()).toBe('SUPERHEROES');
        expect(typeof 'mutants'.toUpper()).toBe('string');
        expect('AWESOME'.toUpper()).toBe('AWESOME');
        expect('Andela'.toUpper()).toBe('ANDELA');
        expect('doJO'.toUpper()).toBe('DOJO');
        expect('check for space handling'.toUpper()).toBe('CHECK FOR SPACE HANDLING');
      });
    });

    describe('to lower', function() {
      // Check whether strings are converted to lowercase.
      it('Return the correct output for different strings', function() {
        expect('THIS IS ANDELA'.toLower()).toBeDefined();
        expect('THIS IS ANDELA'.toLower()).not.toBeUndefined();
        expect('ownership'.toLower()).toBeTruthy();
        expect('listening'.toLower()).not.toBeUndefined();
        expect(typeof 'listening'.toLower()).toBe('string');
        expect('SCALABILITY'.toLower()).toBe('scalability');
        expect('BaNdWiDtH'.toLower()).toBe('bandwidth');
        expect('operating model'.toLower()).toBe('operating model');
      });
    });

    describe(' first charcater to upper', function() {
      // Check whether the first character is converted to uppercase.
      it('Changes the first character to uppercase', function() {
        expect('jeremy'.ucFirst()).toBeDefined();
        expect('jeremy'.ucFirst()).not.toBeUndefined();
        expect('asynchronous'.ucFirst()).toBe('Asynchronous');
        expect(typeof 'testing'.ucFirst()).toBe('string');
        expect('asynchronous'.ucFirst()).not.toBe('ASYNCHRONOUS');
        expect('ASYNCHRONOUS'.ucFirst()).toBe('ASYNCHRONOUS');
        expect('check for handling space'.ucFirst()).toBe('Check for handling space');
        expect('expectations'.ucFirst()).toBeTruthy();
      });
    });

    describe('is the string a question', function() {
      // Check whether a given string is a question.
      it('Correct output is given for different strings', function() {
        expect('Who?'.isQuestion()).toBeDefined();
        expect('Where'.isQuestion()).not.toBeUndefined();
        expect('Which?'.isQuestion()).toBeTruthy();
        expect('When'.isQuestion()).toBeFalsy();
        expect(typeof 'Hello?'.isQuestion()).toBe('boolean');
        expect('Who is there?'.isQuestion()).toBe(true);
        expect('Cultural awareness'.isQuestion()).toBe(false);
      });
    });

    describe('words in a string', function() {
      // Get the words in a string.
      it('Gives the words in a string as output', function() {
        expect(typeof 'who are these people'.words()).toBe('object');
        expect(Array.isArray('who are these people'.words())).toBe(true);
        expect('tell me more'.words()).toBeTruthy();
        expect(''.words()).toEqual([]);
        expect('team js rocks'.words()).toEqual(['team', 'js', 'rocks']);
        expect('what are thoose 3289237612'.words()).toEqual(['what', 'are', 'thoose']);
        expect('Special characters @$@^%#&$%^&$'.words()).toEqual(['Special', 'characters']);
      });
    });

    describe('number of words in a string', function() {
      // Get the correct number of words in astring.
      it('returns the number of words in a string', function() {
        expect('Kanye west'.wordCount()).toBeDefined();
        expect('zombie attire'.wordCount()).toBeTruthy();
        expect(typeof 'deez round objects'.wordCount()).toBe('number');
        expect('hey, sema'.wordCount()).toBe(2);
        expect('what are thoose'.wordCount()).toBe(3);
      });
    });

    describe('to currency', function() {
      // Change a number in string format ot currency format
      it('converts a number string to currency format', function() {
        expect('1000'.toCurrency()).toBeDefined();
        expect('10000'.toCurrency()).toBeTruthy();
        expect(typeof '563256'.toCurrency()).toBe('string');
        expect('2500'.toCurrency()).toBe('2,500.00');
        expect('32657.466'.toCurrency()).toBe('32,657.47');
        expect('32653462576'.toCurrency()).toBe('32,653,462,576.00');
      });
    });

    describe(' from currency', function() {
      // Get a number from a string number in currency format.
      it('converts a currency formatted number string to a number', function() {
        expect('1,000.00'.fromCurrency()).toBeDefined();
        expect('100'.fromCurrency()).toBeTruthy();
        expect(typeof '2,345.98'.fromCurrency()).toBe('number');
        expect('99'.fromCurrency()).toBe(99);
        expect('9,874.00'.fromCurrency()).toBe(9874);
        expect('53,342.623'.fromCurrency()).toBe(53342.623);
      });
    });
  });
})();
