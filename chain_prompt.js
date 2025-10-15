/**
 * Converts a string to kebab-case.
 * - Normalizes separators (spaces, underscores, hyphens) to single spaces.
 * - Trims leading/trailing whitespace.
 * - Splits into words, removes non-alphanumeric characters from each word.
 * - Converts all words to lowercase.
 * - Joins words with hyphens.
 * @param {string} input
 * @returns {string}
 */
function toKebabCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }

    // Normalize separators to single spaces and trim
    const normalized = input
        .replace(/[\s_-]+/g, ' ')
        .trim();

    // Split into words, remove non-alphanumeric chars, lowercase
    const words = normalized
        .split(' ')
        .map(word => word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase())
        .filter(Boolean); // Remove empty strings

    return words.join('-');
}

// Example usages:
console.log(toKebabCase('Hello World')); // "hello-world"
console.log(toKebabCase('  _Hello-World__Test_ ')); // "hello-world-test"
console.log(toKebabCase('foo_bar-baz qux')); // "foo-bar-baz-qux"
console.log(toKebabCase('Special!@#Characters$$$Here')); // "special-characters-here"
console.log(toKebabCase('___')); // ""
console.log(toKebabCase('')); // ""
try {
    console.log(toKebabCase(123)); // Throws TypeError
} catch (e) {
    console.error(e.message);
}