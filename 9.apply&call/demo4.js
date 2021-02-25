//call的第三版实现

Function.prototype.call3 = function(context) {
    context.fn = this;
    var args = [];
    // arguments = {
    //      0: foo,
    //      1: 'kevin',
    //      2: 18,
    //      length: 3
    // }
    // 因为arguments是类数组对象，所以可以用for循环
    for(var i = 1; i < arguments.length; i++) {
        args.push('arguments[' + i + ']');
    }
    eval('context.fn(' + args + ')');
    delete context.fn;
}

var foo = {
    value: 1
};
function bar(name, age) {
    console.log(name);
    console.log(age);
    console.log(this.value);
}

bar.call3(foo, 'kevin', 18);