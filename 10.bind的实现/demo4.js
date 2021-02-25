//实现demo3中 参数的传入
var foo = {
    value: 1
};
function bar(name, age) {
    console.log(name);
    console.log(age);
    console.log(this.value);
}
Function.prototype.bind3 = function(context) {
    var self = this;
    // 获取bind3函数从第二个参数到最后一个参数
    var args = Array.prototype.slice.call(arguments, 1);
    return function() {
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(context, args.concat(bindArgs));
    }
}
var bindFoo = bar.bind(foo, 'zdx');
bindFoo(18);