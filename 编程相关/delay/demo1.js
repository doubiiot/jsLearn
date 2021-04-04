function sleep(){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            resolve("1333")
        }, 1000)
    })
}
async function func() {
    for (let i = 1;i<=5;i++){
        let x = await sleep();
        console.log(i);
    }
}
func();