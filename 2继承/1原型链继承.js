//原型链继承
function Person() {
    this.name = ['zdx', 'yt'];
}
Person.prototype.getName = function () {
    console.log(this.name);
}
function Child() {

}
Child.prototype = new Person();
var child1 = new Child();
var child2 = new Child();
child1.getName();
child1.getName();
child1.name.push('new name');
child1.getName();
child1.getName();