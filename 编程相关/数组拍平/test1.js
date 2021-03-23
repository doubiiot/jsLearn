const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "zdx同学" }]
Array.prototype.flat = function(num) {

    let arr = this.concat();
    if(arr.some((x) => Array.isArray(x))) {
        arr = [].concat.apply([], arr);
    }
    return arr;
}
console.log(arr.flat(2));