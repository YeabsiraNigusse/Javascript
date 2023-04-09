// Global scope (converter, tempOne, TempTwo)
 // Local Scope (celcious, fahrehnit)
  // Local Scope (isFreezing)


let converter = function(fahrehnit){
    let celicious = (fahrehnit - 32)*5/9
    if (celicious <= 0){
        let isFreezing = true
    }
    return celicious
}
// print the value
let tempOne = converter(32)
console.log("the value of 32F in C is "+ tempOne)
let tempTwo = converter(68)
console.log("the value of 68F in C is "+ tempTwo)

console.log(ten)
// let ten = 10