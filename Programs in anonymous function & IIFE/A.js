// Print odd numbers in an array

// Using anonymous function
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function(num) {
  if (num % 2 !== 0) {
    console.log(num);
  }
});

// Using IIFE
(function() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  numbers.forEach(function(num) {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
})();
