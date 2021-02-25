console.log(this);
console.log(this instanceof Object);

// 都能生效
var a = 1;
console.log(Math.random());
//console.log(this.Math.random());
//console.log(this.a);

//console.log(window.Math.random());
//console.log(window.a);