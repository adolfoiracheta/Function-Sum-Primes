//Task 1 
//Get all of the numbers up to (n)
//ex: 1,2,3,4,5 
//From this list of numbers check if they are prime
//ex: 2,3,5
//Add the prime numbers = 10

function sumPrimes(n) {
  let sum = 0
for (let i = 2; i <= n; i++) {
  if (checkPrime(i)) {
    sum += i
    }
  }
  return sum
}
console.log(sumPrimes(5))

function checkPrime(i) {
  for ( let j = 2; j < i; j++) {
    if (i % j == 0) {
      return false
    }
  }
  return true
} 

