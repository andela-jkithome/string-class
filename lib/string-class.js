(function() {
'use strict';

// Verify the presence of vowels in a string.
String.prototype.hasVowels = function() {
  // Test for a vowel match in the string.
  return /[aeiou]/i.test(this);
};

// Change a string to uppercase.
String.prototype.toUpper = function() {
  var self = this;
  // Initialise string to contain the new formatted string.
  var newString = '';
  // Loop through each string position.
  for (var i = 0; i < self.length; i++) {
    // Check whether the index contains a lowercase letter.
    if (/^[a-z]/.test(self[i])) {
      // If the letter is lowercase convert it to uppercase.
      newString += (String.fromCharCode(self[i].charCodeAt(0) - 32));
    } else {
      // If anything else add it to the string as is.
      newString += self[i];
    }
  }
  return newString;
};

// Change a string to lowercase.
String.prototype.toLower = function() {
  var self = this;
  // Initialise string to contain the new formatted string.
  var newString = '';
  // Loop through each string position.
  for (var i = 0; i < self.length; i++) {
    // Check whether the index contains an uppercase letter.
    if (/^[A-Z]/.test(self[i])) {
      // If the letter is uppercase convert it to lowercase.
      newString += (String.fromCharCode(self[i].charCodeAt(0) + 32));
    } else {
      // If anything else add it to the string as is.
      newString += self[i];
    }
  }
  return newString;
};

// Make the first letter of a string uppwercase.
String.prototype.ucFirst = function() {
  var self = this;
  // Initialise string to contain the formatted string.
  var newString = '';
  // Use the toUpper method to make the first letter of the string uppercase.
  newString += self[0].toUpper();
  for (var i = 1; i < self.length; i++) {
    // Add the rest of the string as is.
    newString += self[i];
  }
  return newString;
};

// Verify whether a string is a question.
String.prototype.isQuestion = function() {
  // Check whether end of input is a question mark.
  return /[\?$]/.test(this);
};

// Get all the words in a string as an array.
String.prototype.words = function() {
  var self = this;
  if (self.length === 0) {
    // If the string is empty return an empty array.
    return [];
  } else {
    // If not empty replace punctuations and split it.
    return self.replace(/[^A-Z\s]/gi, '').replace(/\s(?=\s)/).trim().split(' ');
  }
};

// Get the number of words in a string.
String.prototype.wordCount = function() {
  // Use the words method to split the string into words.
  // Return the length of the array i.e number of words.
  return this.words().length;
};

// Convert a number string to currency format.
String.prototype.toCurrency = function() {
  return parseFloat(this).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// Convert a currency format string to a number.
String.prototype.fromCurrency = function() {
  var self = this;
  // Replace commas and convert to a floating point number.
  // Change to a string to get rid of insignificant zeros.
  var numberString = (parseFloat(self.replace(/[,]/g, ''))).toString();
  // convert back to a number and return.
  return parseFloat(numberString);
};
})();