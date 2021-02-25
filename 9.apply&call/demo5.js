//call的最终实现
Function.prototype.call4 = function(context) {
    var context = context || window;
    context.fn = this;
    
    var args = [];
    for(var i = 0; i < arguments.length; i++){
        args.push('arguments[' + i + ']');
    }
    var result = eval('context.fn(' + args + ')');
    delete context.fn();
    return result;
}
var value = 2;
var foo = {
    value : 1
};

function bar(name, age) {
    console.log(this.value);
    return {
        name: name,
        age: age,
        value: this.value
    }
}
// bar.call4(null);
console.log(bar.call4(foo, 'zdx', 18));