// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    const half = Math.ceil(str.length / 2)

    for (let i = 0; i <= half; i++) {
        const startChar = str[i]
        const endChar = str[str.length - i - 1]
        
        if (startChar !== endChar) {
            return false
        }
    }

    return true
}

module.exports = palindrome;
