// npm -> node package manager
// it helps to use external packages into our application which helps us to add dependencies

// e.g see the code below

var mysuper = require('superheroes')
var supers = require('supervillains')

var villains = supers.random()

var heroName = mysuper.random()

console.log(villains)
//console.log(heroName)