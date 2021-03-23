const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "zdx同学" }];
function flat(arr) {
    let res = [];
    arr.forEach(item =>{
        if(Array.isArray(item)) {
            // res = res.concat(item);
            // 相当于调用匿名函数本身
            res = res.concat(arguments.callee(item));
        } else {
            res.push(item);
        }
    });
    
    return res;
}
console.log(flat(arr));