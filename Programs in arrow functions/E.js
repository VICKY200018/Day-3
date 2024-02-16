// Return all the palindromes in an array

let words = ["level", "hello", "radar", "world"];
let palindromes = words.filter(word => word === word.split('').reverse().join(''));
console.log(palindromes);
