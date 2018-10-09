// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for (let i = 1; i <= n; ++i) {
    const modBy3 = i % 3 === 0
    const modBy5 = i % 5 === 0

    if (!modBy3 && !modBy5) {
      console.log(i)
      continue
    }

    let log = ''
    if (modBy3) {
      log += 'fizz'
    }

    if (modBy5) {
      log += 'buzz'
    }

    console.log(log)
  }
}

module.exports = fizzBuzz;
