const map = new Map();
map.set('key', 'value');
map.set('zdx', 'zdx test map');

const set = new Set();
set.add('zdx');
set.add('zdx test');

const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8],
    empty: null,
    map,
    set,
    bool: new Boolean(true),
    num: new Number(2),
    str: new String(2),
    symbol: Object(Symbol(1)),
    date: new Date(),
    reg: /\d+/,
    error: new Error(),
    func1: () => {
        console.log('zdx');
    },
    func2: function (a, b) {
        return a + b;
    }
};
// 可继续遍历类型
const mapTag = '[object Map]';
const setTag = '[object Set]';
const arrayTag = '[object Array]';
const objectTag = '[object Object]';
const argsTag = '[object Arguments]';
//不可继续遍历类型
const boolTag = '[object Boolean]';
const dataTag = '[object Date]';
const numberTag = '[object Number]';
const stringTag = '[object String]';

const symbolTag = '[object Symbol]';
const errorTag = '[object Error]';
const regexpTag = '[object RegExp]';
const funcTag = '[object Function]';

const deepTag = [mapTag, setTag, arrayTag, objectTag, argsTag];
// 通用for循环
function forEach(array, iteratee) {
    var num = -1;
    var length = array.length;
    while(++num < length) {
        // (value, key)
        iteratee(array[num], num);
    }
    return array;
}
// 判断是否为引用类型
function isObject(target) {
    const type = typeof target;
    return target !== null && 
        (type === 'object' || type === 'function');
}
// 获得实际类型
function getType(target) {
    return Object.prototype.toString.call(target);
}
// 初始化被克隆的对象
function getInit(target) {
    const Ctor = target.constructor;
    return new Ctor();
}
function cloneSymbol(target) {
    return Object(Symbol.prototype.valueOf.call(target));
}

// 克隆正则
function cloneReg(target) {
    // \w 匹配字母、数字、下划线。
    const reFlags = /\w*$/;
    const result = new target.constructor(target.source, reFlags.exec(target));
    result.lastIndex = target.lastIndex;
    return result;
}
// 克隆函数
function cloneFunction(func) {
    // (?=pattern) 正向肯定预查。
    // 在任何匹配pattern的字符串开始处匹配查找字符串
    // (?<=pattern) 反向肯定预查，
    // 与正向肯定预查类拟，只是方向相反。
    // m 多行搜索
    // \s 匹配一个空白字符，包括空格、制表符、换页符和换行符
    // . 默认匹配除换行符之外的任何单个字符
    const bodyReg = /(?<={)(.|\n)+(?=})/m;
    const paramReg = /(?<=\().+(?=\)\s+{)/;
    const funcString = func.toString();
    // 箭头函数没有prototype
    if (func.prototype) {
        const param = paramReg.exec(funcString);
        const body = bodyReg.exec(funcString);
        if(body) {
            if(param) {
                const paramArr = param[0].split(',');
                //使用构造函数重新构造一个函数
                return new Function(...paramArr, body[0]);
            }
        } else {
            return null;
        }
    } else {
        // 可以直接使用 eval和函数字符串来重新生成一个箭头函数
        return eval(funcString);
    }
}
function cloneOtherType(target, type) {
    const Ctor = target.constructor;
    switch (type) {
        case boolTag:
        case numberTag:
        case stringTag:
        case errorTag:
        case dataTag:
            return new Ctor(target);
        case regexpTag:
            return cloneReg(target);
        case symbolTag:
            return cloneSymbol(target);
        case funcTag:
            return cloneFunction(target);
        default:
            return null;
    }
}
function clone(target, map = new WeakMap()) {
    if(!isObject(target)) {
        return target;
    }

    const type = getType(target);
    let cloneTarget;
    if(deepTag.includes(type)) {
        cloneTarget = getInit(target, type);
    } else {
        return cloneOtherType(target, type);
    }

    if(map.get(target)){
        return target;
    }
    map.set(target, cloneTarget);

    if(type === setTag){
        forEach(target, value => {
            cloneTarget.add(clone(value));
        });
        return cloneTarget;
    }
    if(type === mapTag) {
        forEach(target, (value, key) => {
            cloneTarget.set(key, clone(value));
        });
        return cloneTarget;
    }
    //处理对象和数组
    const keys = type === arrayTag ? undefined : Object.keys(target);
    forEach(keys || target, (value, key) => {
        if(keys) {
            key = value;
        }
        cloneTarget[key] = clone(target[key], map);
    });
    return cloneTarget;
}
// console.log(target);
console.log(clone(target));
