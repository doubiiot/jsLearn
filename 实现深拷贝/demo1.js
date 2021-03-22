const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8],
    f: { 
        f: { 
            f: { 
                f: { 
                    f: { 
                        f: { 
                            f: { 
                                f: { 
                                    f: { 
                                        f: { 
                                            f: { 
                                                f: 1 } } } } } } } } } } },
};
function clone(target) {
    let cloneTarget = {};
    for(const key in target){
        cloneTarget[key] = target[key];
    }
    return cloneTarget;
}
console.log(target);
console.log(clone(target));