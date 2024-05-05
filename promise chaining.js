let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Resolve after 2 sec")
        resolve(56)
    }, 2000)
})

p1.then((value) => {
    console.log(value)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise2")
        }, 2000)
    })
}).then((value) => {
    console.log("we are done")
    return 2
}).then((value) => {
    console.log("Now we are pakka done")
})