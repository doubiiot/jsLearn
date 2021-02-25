//括号遇到function会默认当做函数声明，
//如果不告诉括号它是表达式，他会将其当做
//没有名字的函数声明并且报错
//function (){}();

//function当做函数声明，括号内需要表达式，不能为空
//function func(){/* code */}();
function func(){}(1);
//上面函数相当于：
function func(){};
(1);
//下面表达是正确的表达
(function func2(){/* code */}())