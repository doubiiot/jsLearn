const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};
target.target = target;

function foreach(array, iteratee) {
    var num = -1;
    var length = array.length;
    while(++num < length) {
        // (value, key)
        iteratee(array[num], num);
    }
    return array;
}
function clone(target, map = new WeakMap()) {
    if(typeof target === 'object') {
        var isArray = Array.isArray(target);
        var cloneTarget = isArray ? [] : {};
        if(map.get(target)) {
            return target;
        }
        map.set(target, cloneTarget);
        var keys = isArray ? undefined : Object.keys(target);
        // array[num], num
        foreach(keys || target, (value, key) => {
            // 如果不是数组
            if(keys) {
                console.log(key);
                console.log(value);
                key = value;
            }
            cloneTarget[key] = clone(target[key], map);
        });
        return cloneTarget;
    }
    else {
        return target;
    }
}
console.log(clone(target));