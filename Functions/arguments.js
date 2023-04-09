// multiple arguments
let add = function(a, b){
    return a+b
}
let result = add(1, 3)
console.log(result)
// Default arguments
let getScoreText = function(name = 'Anonymous', score = 0){
console.log(name)
console.log(score)
}
getScoreText(undefined,99)

//challenge area


let getTip = function(total, tip = 0.2){
    let result = total*tip
    return result
}
let tip = getTip(100)
console.log(tip)