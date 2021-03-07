//只含resolve方法的Promise模型
function Promise1(fn) { 
    let state = 'pending';
    let value = null;
    const callbacks = [];

    this.then = function (onFulfilled) {
        return new Promise((resolve, reject) => {
            handle({ //桥梁，将新 Promise 的 resolve 方法，放到前一个 promise 的回调对象中
                onFulfilled, 
                resolve
            })
        })
    }

    function handle(callback) {
        if(state === 'pending') {
            callbacks.push(callback)
            return;
        }
        // 当一个Promise状态被fulfilled之后，
        // 会执行其回调函数，回调函数的返回的结果
        // 会被当做value，返回给下一个Promise(then中产生的Promise)
        // 同时下一个Promise的状态也会被改变（执行resolve或reject）
        // 然后再去执行其回调
        if(state === 'fulfilled') {
            if(!callback.onFulfilled) {
                callback.resolve(value)
                return;
            }
            const ret = callback.onFulfilled(value) //处理回调
            callback.resolve(ret) //处理下一个 promise 的resolve
        }
    }

    function resolve(newValue){
        const fn = () => {
            if(state !== 'pending') return

            state = 'fulfilled';
            value = newValue
            handelCb()
        }
        
        setTimeout(fn,0) //基于 PromiseA+ 规范
    }
    
    function handelCb() {
        while(callbacks.length) {
            const fulfiledFn = callbacks.shift();
            handle(fulfiledFn);
        };
    }
    
    fn(resolve);
}
