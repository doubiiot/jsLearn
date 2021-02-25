
var foo = {
    value: 1
};
function bar(name, age) {
    console.log(name);
    console.log(age);
    console.log(this.value);
}
var bindFoo2 = bar.bind(foo, 'zdx');
bindFoo2(18);