// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function countChar(str) {
  const sanitizedStr = str.replace(/[^\w]/g, '').toLowerCase()

  const result = {}
  for (char of sanitizedStr) {
    result[char] = result[char] + 1 || 1
  }

  return result
}

function anagrams(stringA, stringB) {
  const countA = countChar(stringA)
  const countB = countChar(stringB)

  if (Object.keys(countA).length !== Object.keys(countB).length) {
    return false
  }

  for (let key in countA) {
    if (countA[key] !== countB[key]) {
      return false
    }
  }

  return true
}

module.exports = anagrams;
