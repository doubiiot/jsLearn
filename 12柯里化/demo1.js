// 第一版柯里化实现
function add(a, b) {
    console.log(a + b);
    return a + b;
}
var curry = function(fn) {
    console.log(arguments);
    var args = [].slice.call(arguments, 1);
    return function() {
        console.log(arguments);
        var funcArgs = args.concat([].slice.call(arguments));
        console.log(this);
        return fn.apply(this, funcArgs);
    }
}
// var addFunc = curry(add, 1, 2);
// addFunc();

var addFunc2 = curry(add, 1);
addFunc2(2);

// var addFunc3 = curry(add);
// addFunc3(1, 2);