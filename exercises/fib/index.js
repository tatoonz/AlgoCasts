// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  if (n <= 0) {
    return 0
  }

  if (n <= 2) {
    return 1
  }

  let penultimate = 1
  let last = 1

  for (i = 3; i <= n; i++) {
    const tmp = penultimate + last
    penultimate = last
    last = tmp
  }

  return last
}

module.exports = fib;
