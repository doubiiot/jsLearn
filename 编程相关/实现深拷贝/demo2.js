const target = {
    field1: 1,
    field2: undefined,
    field3: 'ConardLi',
    field4: {
        child: 'child',
        child2: {
            child2: 'child2'
        }
    }
};
function clone(target) {
    // 如果是引用类型就返回
    if(typeof target === 'object'){
        let cloneTarget = {};
        // 递归clone
        for(const key in target){
            cloneTarget[key] = clone(target[key]);
        }
        return cloneTarget;
    }
     // 如果是原始类型就返回
    else {
        return target;
    }
}
console.log(clone(target));