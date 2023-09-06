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


class Student extends PersonClass {
    constructor (firstName, lastName, age, grade, likes = []){
        super(firstName, lastName, age, likes = [])
            this.grade = grade
    }

    getBio(){
        let bio = ''
        if(this.grade >= 70){
             bio = `${this.firstName} ${this.lastName} has passed`
        }else if(this.grade < 70){
            bio = `${this.firstName} ${this.lastName} has failed`
        }

        return bio
    }
    
    upgradeGrade(number){
        this.grade += number
       return this.grade
    }

}

const student1 = new Student('yeab', 'nigusse', 21, 90, [])
console.log(student1.getBio())
console.log(student1.upgradeGrade(-21))
console.log(student1.getBio())