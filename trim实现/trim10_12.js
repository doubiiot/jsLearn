// ^匹配输入字符串的开始位置。
// $匹配输入字符串的结束位置
// \s 匹配任何空白字符
// * 0次或多次
// + 一次货多次
// ？零次或一次
String.prototype.trim10 = function() {
  var str = this;
  whitespace = ' \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000';
  for(var i = 0;i < str.length; i++){
      if(whitespace.indexOf(str.charAt(i)) === -1){
        str = str.substring(i);
        break;
      } 
  }
  for(var i = str.length-1;i >= 0; i--){
    if(whitespace.indexOf(str.charAt(i)) === -1){
      str = str.substring(0, i + 1);
      break;
    } 
  }
  return whitespace.indexOf(str.charAt(0)) === -1 ? str : '';
}
String.prototype.trim11 = function() {
    var str = this;
    str = str.replace(/^\s+/, '');
    for(var i = str.length-1; i >= 0; i--){
      if(/\S/.test(str.charAt(i))) {
        str = str.substring(0, i+1)
        break;
      }
    }
    return str;
}
String.prototype.trim12 = function() {
    var str = this,
    str = str.replace(/^\s\s+/, ''),
    ws = /\s/,
    i = str.length;
    while(ws.test(str.indexOf(--i)));
    return str.slice(0, i+1);
}


var str = "   a   bcd  e   ";
console.log(str);
console.log(str.trim10());
console.log(str.trim11());
console.log(str.trim11());

