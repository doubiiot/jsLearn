const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "zdx同学" }];
function flat(arr) {
    const res = [];
    const stack = [].concat(arr);
    while(stack.length != 0) {
        const val = stack.pop()
        if(Array.isArray(val)) {
            stack.push(...val);
        } else {
            res.unshift(val);
        }
    }
    return res;
}
console.log(flat(arr));