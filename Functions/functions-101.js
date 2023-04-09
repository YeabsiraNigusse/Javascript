// Functions - input, code, output

let greetUser = function(){
    console.log('This is Function')
}

greetUser()

let square = function(number){
    let result = number*number
    return result
}
let value = square(3)
console.log(value)

// challenge area

// convert fahrehnit to celicious
let converter = function(fahrehnit){
    let celicious = (fahrehnit - 32)*5/9
    return celicious
}
// print the value
let tempOne = converter(32)
console.log("the value of 32F in C is "+ tempOne)
let tempTwo = converter(68)
console.log("the value of 68F in C is "+ tempTwo)
