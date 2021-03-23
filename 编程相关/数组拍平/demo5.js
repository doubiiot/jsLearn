const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "zdx同学" }];
function *flat(arr, num) {
    if(num === undefined) {
        num = 1;
    }
    for(const item of arr) {
        if(Array.isArray(item) && num > 0) {
            yield *flat(item, num-1);
        } else {
            yield item;
        }
    }
}
console.log([...flat(arr, 2)]);