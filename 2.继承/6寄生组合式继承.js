function Parent(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}
Parent.prototype.getName = function() {
    console.log(this.name);
}
function Child(name, age) {
    Parent.call(this, name);
    this.age = age;
}
function object(o) {
    function F(){};
    F.prototype = o;
    return new F();
}
function inheritPrototype(SubType, SuperType) {
    var clone = object(SuperType.prototype);
    clone.constructor = SubType;
    SubType.prototype = clone;
}
inheritPrototype(Child, Parent);
var child1 = new Child('dx', 25);
child1.getName();