function Person() {

}
Person.prototype.name = 'name of prototype'
var person = new Person();
console.log(person.name);
person.name = 'person name';
console.log(person.name);
console.log(Person.prototype.__proto__);