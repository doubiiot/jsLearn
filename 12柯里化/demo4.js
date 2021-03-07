function curry(fn, args) {
    args = args || [];
    var length = fn.length;

    return function(){
        var _args = args.slice(0);
        var i;
        for(i = 0; i < arguments.length; i++) {
            _args.push(arguments[i]);
        }

        if(_args.length < length) {
            return curry.call(this, fn, _args);
        }
        else {
            return fn.apply(this, _args);
        }
    }
}
function func(a, b, c){
    return [a,b,c];
}
var curryFunc = curry(func);
console.log(curryFunc("a","b")("c"));