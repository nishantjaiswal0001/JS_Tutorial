function sum(a,b){
    console.log(a+b)
}

function calculator(a,b,sumCallback){
   sumCallback(a,b);
}

calculator(89,67,sum)

// function getdataCB(dataid,getnextdata){
//     //2s
//     setTimeout(()=>{
//         console.log("data",dataid,"callback")
//         if(getnextdata){
//             getnextdata()
//         }
//     },2000)
// }

// //callback hell
// getdataCB(1,()=>{
//     getdataCB(2,()=>{
//         getdataCB(3)
//     })
// })

// // Callback Hell Cons:
// // Callback hell (nested pyramids)
// // Error handling is messy
// // Hard to read, debug, maintain

// // Same logic using Promise, to improve(get rid of) callback hell
// function getdataPr(dataid) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataid,"promise")
//             resolve()
//         }, 2000)
//     })
// }

// getdataPr(1)
//   .then(() => getdataPr(2))
//   .then(() => getdataPr(3))
//   .then(() => getdataPr(4))


// //  Same logic using async/await  (best way)
// async function getdataasync(dataid) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("data", dataid,"async")
//             resolve()
//         }, 2000)
//     })
// }

// async function run() {
//     await getdataasync(1)
//     await getdataasync(2)
//     await getdataasync(3)
// }
// run()


function getDataCB(id, cb) {
    setTimeout(() => {
        if (id === 2) {
            cb("Error at " + id)
            return
        }
        console.log ("data", id)
        cb(null)
    }, 1000)
}

// getDataCB(1, (err) => {
//     if (err) return console.log(err)  //return working is main important part
//     getDataCB(2, (err) => {
//         if (err) return console.log(err)
//         getDataCB(3, (err) => {
//             if (err) return console.log(err)
//         })
//     })
// })

getDataCB(1, (err) => {
    console.log(err)
    getDataCB(2, (err) => {
        console.log(err)
        getDataCB(3, (err) => {
            console.log(err)
        })
    })
})


function getDataPr(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 2) {
                reject("Error at " + id)
            } else {
                console.log("data", id)
                resolve()
            }
        }, 1000)
    })
}

getDataPr(1)
  .then(() => getDataPr(2))
  .then(() => getDataPr(3))
  .catch(err => console.log(err))


async function getData(id) {
    if (id === 2) throw "Error at " + id
    await new Promise(r => setTimeout(r, 1000))
    console.log("data", id)
}

async function run() {
    try {
        await getData(1)
        await getData(2)
        await getData(3)
    } catch (err) {
        console.log(err)
    }
}

run()

