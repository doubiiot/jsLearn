// ^匹配输入字符串的开始位置。
// $匹配输入字符串的结束位置
// \s 匹配任何空白字符
// * 0次或多次
// + 一次货多次
// ？零次或一次
String.prototype.trim1 = function() {
    return this.replace(/^\s*/, '').replace(/\s*$/, '');
}

String.prototype.trim2 = function() {
    return this.replace(/^\s+/, '').replace(/\s+$/, '');
}
// \S 匹配任何非空白字符
// substring(a, b) a起始点下标 b终止点下标（不包含）[a,b)
String.prototype.trim3 = function() {
    return this.substring(Math.max(this.search(/\S/), 0), this.search(/\S\s*$/) + 1);
}
//不加入g，则只返回第一个匹配，无论执行多少次均是如此
//如果加入g，则第一次执行也返回第一个匹配，再执行返回第二个匹配
String.prototype.trim4 = function() {
    return this.replace(/^\s+|\s+$/g, '');
}

// (?:pattern) 
// 匹配 pattern 但不获取匹配结果
// 也就是说这是一个非获取匹配，不进行存储供以后使用。
String.prototype.trim5 = function() {
    var str = this;
    str = str.match(/\S+(?:\s+\S+)*/);
    // console.log(str);
    return str ? str[0] : '';
}

var str = "   a   bcd  e   ";
console.log(str);
console.log(str.trim1());
console.log(str.trim2());
console.log(str.trim3());
console.log(str.trim4());
console.log(str.trim5());

