let reg = '/<[^>]+>/ig'
const str = '<div>hello<br /> world</div>';
console.log(str.replace(/<[^>]+>/ig, ''));  // hello world