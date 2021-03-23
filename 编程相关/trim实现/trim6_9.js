// replace(regexp|substr, newSubStr|function)
// regexp 一个RegExp 对象或者其字面量。
// 该正则所匹配的内容会被第二个参数的返回值替换掉。

// newSubStr $n -> 假如第一个参数是 RegExp对象，
// 并且 n 是个小于100的非负整数，那么插入第 n 个括号匹配的字符串。
// ?????
String.prototype.trim6 = function() {
    // console.log(this.match(/^\s*(\S*(\s+\S+)*)\s*/));
    return this.replace(/^\s*(\S*(\s+\S+)*)\s*/, '$1');
}
String.prototype.trim7 = function() {
    return this.replace(/^\s*(\S*(?:\s+\S+)*)\s*$/, '$1');
}
String.prototype.trim8 = function() {
    return this.replace(/^\s*((?:[\S\s]*\S)?)\s*$/, '$1');
}
String.prototype.trim9 = function() {
    return this.replace(/^\s*([\S\s]*?)\s*$/, '$1');
}
var str = "   a   bcd  e   ";
console.log(str);
console.log(str.trim6());
console.log(str.trim7());
console.log(str.trim8());
console.log(str.trim9());