// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let maxCount = 0
  let maxChar = ''
  const charCount = {}

  for (char of str) {
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1

    if (charCount[char] > maxCount) {
      maxCount = charCount[char]
      maxChar = char
    }
  }

  return maxChar
}

module.exports = maxChar;
