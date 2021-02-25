//第一版代码
var foo = {
    value: 1
};
function bar() {
    console.log(this.value);
}
Function.prototype.bind2 = function(context) {
    var self = this;
    return function(){
        return self.apply(context);
    }    
}
var bindFoo = bar.bind2(foo);
bindFoo();
