const square = (num) => num* num

const people = [{
    name: 'Yeab',
    age: 21
},

{
    name: 'sami',
    age:32
},
{
    name: 'mekdi',
    age: 25
}
]

const under30 = people.filter( (person) => person.age < 30)

under30.forEach( function (person){
    console.log(person.name)
})