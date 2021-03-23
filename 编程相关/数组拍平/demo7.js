const arr = [ , , ,1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "zdx同学" }]
Array.prototype.flat = function(num) {
    if(!Number(num) || Number(num) < 0) {
        return this;
    }
    let arr = this.concat();
    return num > 0 ? arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? cur.flat(num-1) : cur);
    },[]) : arr.slice();
}
console.log(arr.flat(2));