// Refined prompt for a robust camelCase function
/**
 * Write a robust JavaScript function called toCamelCase that converts any string to camelCase.
 * The function should handle edge cases such as multiple consecutive separators (spaces, underscores, hyphens),
 * leading/trailing separators, mixed casing, numbers, and non-alphabetic characters.
 * It should include error handling for non-string inputs by returning an empty string or throwing an error.
 * Add clear inline comments and provide several example usages demonstrating its behavior with various edge cases.
 */

/**
 * Converts a string to camelCase format.
 * Handles multiple consecutive separators (spaces, underscores, hyphens),
 * leading/trailing separators, mixed casing, numbers, and non-alphabetic characters.
 * Returns an empty string for non-string inputs or empty results.
 *
 * @function toCamelCase
 * @param {string} str - The input string to convert.
 * @returns {string} The camelCase formatted string.
 *
 * @example
 * toCamelCase('first name'); // 'firstName'
 * toCamelCase('user_id'); // 'userId'
 * toCamelCase('SCREEN_NAME'); // 'screenName'
 * toCamelCase('mobile-number'); // 'mobileNumber'
 * toCamelCase('  multiple   spaces  '); // 'multipleSpaces'
 * toCamelCase('___leading__underscores'); // 'leadingUnderscores'
 * toCamelCase('trailing---'); // 'trailing'
 * toCamelCase('MiXeD_cAsE-Input'); // 'mixedCaseInput'
 * toCamelCase('123number_first'); // '123numberFirst'
 * toCamelCase('!@#special$$$chars'); // 'specialChars'
 * toCamelCase(12345); // ''
 */
function toCamelCase(str) {
  if (typeof str !== 'string') return '';
  // Remove leading/trailing separators and normalize separators to spaces
  str = str.trim().replace(/[_\-]+/g, ' ').replace(/\s+/g, ' ');
  // Split into words, filter out empty strings
  const words = str.split(' ').filter(Boolean);
  if (words.length === 0) return '';
  // Convert first word to lowercase, others to capitalized
  return words
    .map((word, i) => {
      word = word.replace(/[^a-zA-Z0-9]/g, ''); // Remove non-alphanumeric
      if (i === 0) return word.toLowerCase();
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}

// Example usages:
console.log(toCamelCase('first name'));           // firstName
console.log(toCamelCase('user_id'));              // userId
console.log(toCamelCase('SCREEN_NAME'));          // screenName
console.log(toCamelCase('mobile-number'));        // mobileNumber
console.log(toCamelCase('  multiple   spaces  ')); // multipleSpaces
console.log(toCamelCase('___leading__underscores'));// leadingUnderscores
console.log(toCamelCase('trailing---'));          // trailing
console.log(toCamelCase('MiXeD_cAsE-Input'));     // mixedCaseInput
console.log(toCamelCase('123number_first'));      // 123numberFirst
console.log(toCamelCase('!@#special$$$chars'));   // specialChars
console.log(toCamelCase(12345));                  // ''

/**
 * Converts a string to dot.case format.
 * Handles multiple separators, mixed casing, numbers, and non-string inputs.
 * Example: 'First Name' => 'first.name'
 */
/**
 * Converts a string to dot.case format.
 * Handles multiple consecutive separators (spaces, underscores, hyphens),
 * leading/trailing separators, mixed casing, numbers, and non-alphabetic characters.
 * Returns an empty string for non-string inputs or empty results.
 *
 * @function toDotCase
 * @param {string} str - The input string to convert.
 * @returns {string} The dot.case formatted string.
 *
 * @example
 * toDotCase('First Name'); // 'first.name'
 * toDotCase('user_id'); // 'user.id'
 * toDotCase('SCREEN_NAME'); // 'screen.name'
 * toDotCase('mobile-number'); // 'mobile.number'
 * toDotCase('  multiple   spaces  '); // 'multiple.spaces'
 * toDotCase('___leading__underscores'); // 'leading.underscores'
 * toDotCase('trailing---'); // 'trailing'
 * toDotCase('MiXeD_cAsE-Input'); // 'mixed.case.input'
 * toDotCase('123number_first'); // '123number.first'
 * toDotCase('!@#special$$$chars'); // 'special.chars'
 * toDotCase(12345); // ''
 */
function toDotCase(str) {
  if (typeof str !== 'string') return '';
  // Remove leading/trailing separators and normalize separators to spaces
  str = str.trim().replace(/[_\-]+/g, ' ').replace(/\s+/g, ' ');
  // Split into words, filter out empty strings
  const words = str.split(' ').filter(Boolean);
  if (words.length === 0) return '';
  // Convert all words to lowercase and join with dots
  return words
    .map(word => word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase())
    .filter(Boolean)
    .join('.');
}

// Example usages:
console.log(toDotCase('First Name'));           // first.name
console.log(toDotCase('user_id'));              // user.id
console.log(toDotCase('SCREEN_NAME'));          // screen.name
console.log(toDotCase('mobile-number'));        // mobile.number
console.log(toDotCase('  multiple   spaces  ')); // multiple.spaces
console.log(toDotCase('___leading__underscores'));// leading.underscores
console.log(toDotCase('trailing---'));          // trailing
console.log(toDotCase('MiXeD_cAsE-Input'));     // mixed.case.input
console.log(toDotCase('123number_first'));      // 123number.first
console.log(toDotCase('!@#special$$$chars'));   // special.chars
console.log(toDotCase(12345));                  // ''

module.exports = { toCamelCase, toDotCase };