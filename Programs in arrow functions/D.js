//  Return all the prime numbers in an array.

let numbers = [2, 3, 4, 5, 6, 7, 8, 9];
let primes = numbers.filter(num => {
  for (let i = 2; i < num; i++)
    if (num % i === 0) return false;
  return num > 1;
});
console.log(primes);
