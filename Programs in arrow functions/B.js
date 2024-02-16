//  Convert all the strings to title caps in a string array.

let strings = ["apple", "banana", "cherry"];
let titleCaps = strings.map(str => str.charAt(0).toUpperCase() + str.slice(1));
console.log(titleCaps);
