// 柯里化章节的实现：
function add(a, b, c){
    return a + b + c;
}
function curry(fn, args){
    args = args || [];
    var length = fn.length;
    return function(){
        var _args = args.slice(0);
        for(var i = 0; i < arguments.length; i++){
            _args.push(arguments[i]);
        }
        if(_args.length < length){
            return curry.call(this, fn, _args);
        }
        else {
            return fn.apply(this, _args);
        }
    }
}
var curryFunc = curry(add);
console.log(curryFunc(1)(2)(3));
