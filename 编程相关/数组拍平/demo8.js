const arr = [ , , ,1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "zdx同学" }]
Array.prototype.flat = function(num) {
    if(!Number(num) || Number(num) < 0) {
        return this;
    }
    let arr = [];
    this.forEach((cur) => {
        if(Array.isArray(cur)) {
            arr = arr.concat(cur.flat(num-1));
        } else {
            //arr = arr.concat(cur);
            arr.push(cur);
        }
    });
    return arr;
    
}
console.log(arr.flat(2));