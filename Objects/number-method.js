let num = 12.46

console.log(num.toFixed(1))

// let us generate a random number
let min = 10
let max = 20

let random = Math.floor(Math.random()* (max - min + 1)) + min

console.log(random)

// challenge area

let makeGuess = function(number){
   return number === Math.floor(Math.random()*5) + 1
}

console.log(makeGuess(2))
console.log(makeGuess(3))
console.log(makeGuess(5))
console.log(makeGuess(1))