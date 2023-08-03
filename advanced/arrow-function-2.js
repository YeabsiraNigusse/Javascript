const add = function (a, b){
    console.log(arguments)
}

add (11,22,33,44)
// the above function won't work for arrow functions

person = {
    name: 'yeab',
    getName: function () {
        console.log(`my name is ${this.name}`)
    }
}
person.getName()
// arrow function cant bind this key word