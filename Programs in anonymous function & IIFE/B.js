// Convert all the strings to title caps in a string array

// Using anonymous function
let strings = ["apple", "banana", "cherry"];
let titleCaps = strings.map(function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
console.log(titleCaps);

// Using IIFE
(function() {
  let strings = ["apple", "banana", "cherry"];
  let titleCaps = strings.map(function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
  console.log(titleCaps);
})();
