// Sum of all numbers in an array

// Using anonymous function
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce(function(acc, num) {
  return acc + num;
}, 0);
console.log(sum);

// Using IIFE
(function() {
  let numbers = [1, 2, 3, 4, 5];
  let sum = numbers.reduce(function(acc, num) {
    return acc + num;
  }, 0);
  console.log(sum);
})();
