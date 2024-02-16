// Rotate an array by k times

// Using anonymous function
let array = [1, 2, 3, 4, 5];
let rotateByK = function(arr, k) {
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
}(array, 2);
console.log(rotateByK);

// Using IIFE
let array = [1, 2, 3, 4, 5];
let rotateByK = (function(arr, k) {
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
})(array, 2);
console.log(rotateByK);
