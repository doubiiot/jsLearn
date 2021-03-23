function add1(a, b, c){
    return a + b + c;
}
const curry = (fn, ...args) =>
    args.length >= fn.length ?
    fn(...args) :
    (..._args) => curry(fn, ...args, ..._args)
var add = curry(add1);
console.log(add(1)(2)(3));

