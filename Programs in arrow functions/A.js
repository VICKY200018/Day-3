//  Print odd numbers in an array.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(num => {
  if (num % 2 !== 0) {
    console.log(num);
  }
});
