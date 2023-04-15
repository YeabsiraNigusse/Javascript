let mybook = {//object declaration
    title: '1984',
    author: 'George orwell',
    pageCount: 326
}
console.log(mybook)
console.log(`${mybook.title} by ${mybook.author}`)
 
mybook.author = 'Yeab'

console.log(`${mybook.title} by ${mybook.author}`)

//challenge area

let person = {
    name: 'Yeabsira',
    age: 27,
    location: 'Addis Ababa'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)

person.age = 28

console.log(`${person.name} is ${person.age + 1} and lives in ${person.location}`)
