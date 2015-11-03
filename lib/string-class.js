'use strict';

// Verify the presence of vowels in a string.
String.prototype.hasVowels = function() {
  // Test for a vowel match in the string.
  return /[aeiou]/.test(this);
};

// Change a string to uppercase.
String.prototype.toUpper = function() {
  var self = this;
  // Initialise string to contain the new formatted string.
  var newString = '';
  // Loop through each string position.
  for (var i = 0; i < self.length; i++) {
    // Check whether the index contains a lowercase letter.
    if ((/^[a-z]/.test(self[i]) === true)) {
      // If the letter is lowercase convert it to uppercase.
      var letterCode = (self[i].charCodeAt(0));
      var capitalize = letterCode - 32;
      var capitalized = (String.fromCharCode(capitalize));
      newString = newString + capitalized;
    } else {
      // If anything else add it to the string as is.
      newString = newString + self[i];
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
    if ((/^[A-Z]/.test(self[i]) === true)) {
      // If the letter is uppercase convert it to lowercase.
      var letterCode = (self[i].charCodeAt(0));
      var lower = letterCode + 32;
      var lowered = (String.fromCharCode(lower));
      newString = newString + lowered;
    } else {
      // If anything else add it to the string as is.
      newString = newString + self[i];
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
  newString = newString + self[0].toUpper();
  for (var i = 1; i < self.length; i++) {
    // Add the rest of the string as is.
    newString = newString + self[i];
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
  var empty = [];
  if (self.length === 0) {
    // If the string is empty return an empty array.
    return empty;
  } else {
    // If not empty replace punctuations and split it.
    var newString = self.replace(/[?.,:;-]/g, '').split(' ');
    return newString;
  }
};

// Get the number of words in a string.
String.prototype.wordCount = function() {
  // Use the words method to split the string into words.
  var stringWords = this.words();
  // Return the length of the array i.e number of words.
  return stringWords.length;
};

// Convert a number string to currency format.
String.prototype.toCurrency = function() {
  var newString = '';
  var self = this;
  // Check whether the string has a decimal point.
  if (self.search(/\./) !== -1) {
    // If it does split the string at the decimal point.
    var decimal = self.split(/\./);
    // Add a comma after every 3 digits from the right.
    // Don't add a comma at the beginning of the string.
    newString = newString + decimal[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    // Add the decimal portion of the original string
    newString = newString + '.' + decimal[1];
  } else {
    // Add a comma after every 3 digits from the right.
    // Don't add a comma at the beginning of the string.
    newString = newString + self.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '.00';
  }
  return newString;
};

// Convert a currency format string to a number.
String.prototype.fromCurrency = function() {
  var self = this;
  // Replace commas and convert to a floating point number.
  var number = parseFloat(self.replace(/[,]/g, ''));
  // Change to a string to get rid of insignificant zeros.
  var numberString = number.toString();
  // convert back to a number and return.
  return parseFloat(numberString);
};
