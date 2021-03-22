const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};
target.target = target;
// 如果我们要拷贝的对象非常庞大时，
// 使用 Map会对内存造成非常大的额外消耗，
// 而且我们需要手动清除 Map的属性才能释放这块内存，
// 而 WeakMap会帮我们巧妙化解这个问题。
function clone(target, map = new WeakMap()) {
    // 如果是引用类型就返回
    if(typeof target === 'object') { 
        // 处理数组
        let cloneTarget = Array.isArray(target) ? [] : {};
        //let cloneTarget = {};
        // 检查有无拷贝过当前对象，有的话直接返回
        if(map.get(target)) {
            return target;
        }
        map.set(target, cloneTarget);
        // 递归clone
        for(const key in target){
            cloneTarget[key] = clone(target[key], map);
        }
        return cloneTarget;
    }
     // 如果是原始类型就返回
    else {
        return target;
    }
}
console.log(target);
console.log(clone(target));