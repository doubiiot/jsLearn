var value = 2;

var foo = {
    value: 1
};

function bar(name, age) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}

bar.prototype.friend = 'kevin';

var bindFoo = bar.bind(foo, 'daisy');

var obj = new bindFoo('18');
// undefined 为什么不是2？
// 因为this指向了obj
// daisy
// 18
console.log(obj.habit);
console.log(obj.friend);
// shopping
// kevin
