

const Person = function (firstName, lastName, age, likes = []){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
    
}

Person.prototype.setName = function(fullName){
    const Name = fullName.split(' ')
    this.firstName = Name[0]
    this.lastName = Name[1]
}

Person.prototype.getBio = function (){
    let bio =  `Hi ${this.firstName} ${this.lastName}`

    this.likes.forEach(function (like){
        bio += ` you like ${like} `
    })

    return bio
}



const person1 = new Person('Yeab', 'lastName', 21, ['reading', 'codding'])
person1.setName('Yeabsira Nigusse')
console.log(person1.getBio())

const me = new Person('bereket', 'Nigusse', 18)

me.getBio = function(){
    return 'this is a  method specific to me'
}

console.log(me.getBio())