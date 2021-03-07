
new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ test: 1 })
    }, 500)
  }).then((data) => {
    console.log('result1', data)
    //dosomething
    return test()
  }).then((data) => {
    console.log('result2', data)
  })

  function test(id) {
    return new Promise(((resolve) => {
      setTimeout(() => {
        resolve({ test: 2 })
      }, 2500)
    }))
  }