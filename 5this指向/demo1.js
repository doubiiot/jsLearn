var value = 1;

var foo = {
  value: 2,
  bar: function () {
    return this.value;
  }
}
//this 为 undefined，非严格模式下，
//this 的值为 undefined 的时候，
//其值会被隐式转换为全局对象。

//示例1
// this -> foo, i.e. return foo.value
console.log(foo.bar());
//示例2
console.log((foo.bar)());
//示例3
console.log((foo.bar = foo.bar)());
//示例4
console.log((false || foo.bar)());
//示例5
console.log((foo.bar, foo.bar)());