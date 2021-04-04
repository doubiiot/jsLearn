let container = document.getElementById('container');
let count = 0;
function getUsrInfo() {
    count++;
    container.innerHTML = count;
}
// 时间戳的实现方式
// 立刻执行 触发后不能再执行事件
function throttle1(func, wait) {
    let previous = 0;
    
    return function() {
        let contex = this;
        let args = arguments;
        let now = +new Date();
        if(now - previous > wait) {
            func.apply(contex, args);
            previous = now;
        }
    }
}
// 定时器实现方式
// n秒后第一次执行 触发后依然会再执行一次
function throttle2(func, wait) {
    let timeout;

    return function() {
        let contex = this;
        let args = arguments;
        if(!timeout) {
            timeout = setTimeout(() => {
                // 清空timeout
                timeout = null;
                func.apply(contex, args);
            }, wait)
        }
    }
}

function throttle3(func, wait) {
    let timeout;
    let previous = 0;
    return function() {
        let contex = this;
        let args = arguments;
        let now = +new Date();

        if(now - previous > wait) {
            timeout = null;
            func.apply(contex, args);
            previous = now;
        }
        if(!timeout) {
            timeout = setTimeout(() => {
                // 清空timeout
                timeout = null;
                func.apply(contex, args);
            }, wait)
        }
    }
}



// container.onmousemove = throttle1(getUsrInfo, 3000);
// container.onmousemove = throttle2(getUsrInfo, 3000);
container.onmousemove = throttle3(getUsrInfo, 3000);