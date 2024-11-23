var Person = /** @class */ (function () {
    function Person(properties) {
        this.name = properties.name;
        this.surname = properties.surname;
        this.email = properties.email;
        this.password = properties.password;
    }
    Person.prototype.getInfo = function () {
        console.log("Name: ".concat(this.name, " Surname :").concat(this.surname, " Email :").concat(this.email, " Password : ").concat(this.password));
    };
    Person.prototype.changeEmail = function (email2) {
        this.email = email2;
    };
    return Person;
}());
var personProp = {
    name: "Nizami",
    surname: "Amirov",
    email: "amirovnizami395@gmail.com",
    password: "nizami123"
};
var person = new Person(personProp);
console.log(person);
person.getInfo()
person.changeEmail("nizamiamirov888@gmail.com")
console.log(person)