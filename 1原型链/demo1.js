function Person() {

}
Person.prototype.name = 'zdx';
var person1 = new Person();
var person2 = new Person();
console.log(person1.name);
console.log(person2.name);

console.log(Person.prototype === person1.__proto__);
console.log(Person.prototype.constructor === Person);
console.log(Object.getPrototypeOf(person1) === Person.prototype);