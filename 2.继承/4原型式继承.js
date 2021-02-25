function createObj(o) {
    function F(){}
    F.prototype = o;
    return new F();
}
//原型
var person = {
    name: 'zdx',
    friends: ['zxh', 'cz']
}
var person1 = createObj(person);
var person2 = createObj(person);
console.log(person1.name);
console.log(person1.friends);

person1.name = 'person1';
person2.name = 'person2';
console.log(person1.name);
console.log(person2.name);

person2.friends.push('jg');
console.log(person1.friends);
console.log(person2.friends);