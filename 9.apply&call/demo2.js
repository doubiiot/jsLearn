//call的第一版实现
Function.prototype.call1 = function(context) {
    // 获取调用call的函数 bar
    // console.log(this);
    context.fn = this;
    context.fn();
    delete context.fn;
}

var foo = {
    value: 1
};
function bar() {
    console.log(this.value);
}

bar.call1(foo);