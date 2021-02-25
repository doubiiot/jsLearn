//call的第二版实现

// var args = [];
// for(var i = 1, len = 3; i < len; i++) {
//     args.push('arguments[' + i + ']');
// }
// console.log(args);
// console.log(eval(args));

Function.prototype.call2 = function(context) {
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

bar.call2(foo, 'kevin', 18);