class Person {
    public name: string
    public surname: string
    protected email: string
    private password: string

    constructor(properties : PersonProperties){
        this.name = properties.name
        this.surname = properties.surname
        this.email = properties.email
        this.password = properties.password
    }

    getInfo(){
        console.log(`Name: ${this.name} Surname :${this.surname} Email :${this.email} Password : ${this.password}`)
    }
    changeEmail(email2){
        this.email = email2
    }
}

interface PersonProperties {
    name: string
    surname: string
    email: string
    password: string
}

const personProp :PersonProperties = {
    name:"Nizami",
    surname : "Amirov",
    email :"amirovnizami395@gmail.com",
    password :"nizami123"
}

const person = new Person(personProp)
console.log(person)
