const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "zdx同学" }];
function flat(arr, num = 1) {
    return num > 0 ?
        arr.reduce((pre, cur) => {
            return pre.concat(Array.isArray(cur) ? flat(cur, num-1) : cur);
        },[]) 
        : arr.slice();
}
console.log(flat(arr, 3));