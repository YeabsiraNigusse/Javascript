class PersonClass {
    constructor (firstName, lastName, age, likes = []){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }

    getBio() {

        let bio =  `Hi ${this.firstName} ${this.lastName}`

    this.likes.forEach(function (like){
        bio += ` you like ${like} `
    })

    return bio

    }

    setName(fullName){
        const Name = fullName.split(' ')
        this.firstName = Name[0]
        this.lastName = Name[1]
    }
}

const person1 = new PersonClass('Yeab', 'lastName', 21, ['reading', 'codding'])
person1.setName('Yeabsira Nigusse')
console.log(person1.getBio())