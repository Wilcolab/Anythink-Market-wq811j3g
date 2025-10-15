function toCamelCase(str) {
    return str
        .replace(/[_\-\s]+(.)?/g, (_, chr) => chr ? chr.toUpperCase() : '')
        .replace(/^[A-Z]+/, match => match.toLowerCase())
        .replace(/([A-Z]+)/g, (match, offset) => offset === 0 ? match.toLowerCase() : match.charAt(0).toUpperCase() + match.slice(1).toLowerCase());
}

// Examples:
console.log(toCamelCase('first name'));      // firstName
console.log(toCamelCase('user_id'));         // userId
console.log(toCamelCase('SCREEN_NAME'));     // screenName
console.log(toCamelCase('mobile-number'));   // mobileNumber