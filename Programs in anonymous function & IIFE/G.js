// Remove duplicates from an array

// Using anonymous function
let numbers = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = function(arr) {
  return arr.filter(function(value, index, self) {
    return self.indexOf(value) === index;
  });
}(numbers);
console.log(uniqueNumbers);

// Using IIFE
let numbers = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = (function(arr) {
  return arr.filter(function(value, index, self) {
    return self.indexOf(value) === index;
  });
})(numbers);
console.log(uniqueNumbers);
