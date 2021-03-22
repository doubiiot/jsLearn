const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};
target.target = target;

//for in 循环速度比较慢
function forEach(array, iteratee) {
    let index = -1;
    const length = array.length;
    while(++index < length) {
        // (value , key)
        iteratee(array[index], index);
    }
    return array;
}
// 如果我们要拷贝的对象非常庞大时，
// 使用 Map会对内存造成非常大的额外消耗，
// 而且我们需要手动清除 Map的属性才能释放这块内存，
// 而 WeakMap会帮我们巧妙化解这个问题。
function clone(target, map = new WeakMap()) {
    // 引用类型
    if(typeof target === 'object') { 
        const isArray = Array.isArray(target);
        // 处理数组
        let cloneTarget = isArray ? [] : {};
        //let cloneTarget = {};
        // 检查有无拷贝过当前对象，有的话直接返回
        if(map.get(target)) {
            return target;
        }
        map.set(target, cloneTarget);
        // 递归clone
        // for(const key in target){
        //     cloneTarget[key] = clone(target[key], map);
        // }
        // Object.keys 返回一个所有元素为字符串的数组，
        // 其元素来自于从给定的object上面可直接枚举的属性。这些属性的顺序与手动遍历该对象属性时的一致。
        const keys = isArray ? undefined : Object.keys(target);
        // console.log('keys is ' + keys);
        forEach(keys || target, (value, key) => {
                    // (array[index], index)
            // console.log('value is ' + value);
            // console.log('key is ' + key);
            if(keys) {
                key = value;
            }
            cloneTarget[key] = clone(target[key], map);
        });
        return cloneTarget;
    }
     // 如果是原始类型就返回
    else {
        return target;
    }
}
// console.log(target);
console.log(clone(target));