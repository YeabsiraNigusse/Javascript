let name = "Yeabsira Nigusse"


//length property
console.log(name.length)

// convert to uppercase
console.log(name.toUpperCase())

let password = '123asdfwr32password'
//console.log(password.includes('password'))


//challenge area

//isvalidPassword
// length is more than 8 and it doesn't contain the wor password

let isValid = function(password){
    if(password.length > 8 && !password.includes('password')){
        return true
    }
    else{
        return false
    }
}

let valid = isValid(password)
console.log(valid)
console.log(isValid('asd'))
console.log(isValid('2myf@1988'))