let a = 12345678910.31245
let b = 12382578342312947.235423465
function numFormat1(num) {
    let m = num.toString().split('.')
    let n = m[0].split("").reverse();
    let res = [];
    for(let i = 0; i < n.length; i++) {
        if(i % 3 === 0 && i !== 0) {
            res.push(',');
        }
        res.push(n[i]);
    }
    return res.reverse().join("").concat("." + m[1]);
}
function numFormat2(num) {
    return res = num.toString().replace(/\d+/, (n) => {
        // \d匹配一个数字
        //
        return n.replace(/(\d)(?=(\d{3})+$)/g, ($1) => {
            return $1 + ","
        });
    });
}
console.log(numFormat1(a));
console.log(a.toLocaleString());
console.log(numFormat2(a));