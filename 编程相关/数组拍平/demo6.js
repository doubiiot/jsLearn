const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "zdx同学" }]
Array.prototype.flat = function(num) {
    if(!Number(num) || Number(num) < 0) {
        return this;
    }
    let arr = this.concat();
    while(num--) {
        if(arr.some((x) => Array.isArray(x))) {
            // concat [1] 相当于加入1 
            arr = [].concat.apply([], arr);
        } else {
            break;
        }
    }
    return arr;
}
console.log(arr.flat(2));