// Return all the palindromes in an array

// Using anonymous function
let words = ["level", "hello", "radar", "world"];
let palindromes = words.filter(function(word) {
  return word === word.split('').reverse().join('');
});
console.log(palindromes);

// Using IIFE
(function() {
  let words = ["level", "hello", "radar", "world"];
  let palindromes = words.filter(function(word) {
    return word === word.split('').reverse().join('');
  });
  console.log(palindromes);
})();
