//构造函数继承（经典继承）
function Parent() {
    this.name = ['zdx', 'yt'];
}

function Child() {
    Parent.call(this);
}
var child1 = new Child();
var child2 = new Child();
console.log(child1.name);
console.log(child2.name);
child1.name.push('new name');
console.log(child1.name);
console.log(child2.name);