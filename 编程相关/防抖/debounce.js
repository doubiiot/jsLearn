var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
    console.log(e);
    console.log(this);
    container.innerHTML = count++;
};

function debounce1(func, wait) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(func, wait);
    }
}
// 修复this指向
function debounce2(func, wait) {
    let timeout;
    
    return function() {
        let contex = this;
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            func.apply(contex);
        }, wait);
    }
}
// 修复不能输出event
function debounce3(func, wait) {
    var timeout;

    return function () {
        var context = this;
        var args = arguments;

        clearTimeout(timeout)
        timeout = setTimeout(() => {
            func.apply(context, args)
        }, wait);
    }
}
function debounce4(func, wait, immediate) {
    let timeout;
    return function() {
        var context = this;
        var args = arguments;

        if(timeout) {
            clearTimeout(timeout);
        }
        if(immediate) {
            // false
            let callNow = !timeout;
            timeout = setTimeout(() => {
                timeout = null;
            }, wait);
            if(callNow) func.apply(context, args);
        } else {
            timeout = setTimeout(() => {
                func.apply(context, args);
            }, wait);
        }
    }
}
// container.onmousemove = getUserAction;
// container.onmousemove = debounce1(getUserAction, 500);
// container.onmousemove = debounce2(getUserAction, 500);
// container.onmousemove = debounce3(getUserAction, 500);
container.onmousemove = debounce4(getUserAction, 2000, true);
