// // A Promise is a JavaScript object that represents a value that will be available in the future.

// // ===============================
// // 1️⃣ FULFILLED (Completed)
// // ===============================
// async function success() {
//   return "✅ Promise fulfilled: Done!";
// }

// success().then(result => {
//   console.log(result);
// });


// // ===============================
// // 2️⃣ REJECTED
// // ===============================
// async function failure() {
//   throw new Error("❌ Promise rejected: Something went wrong");
// }

// failure()
//   .then(result => {
//     console.log(result); // will NOT run
//   })
//   .catch(error => {
//     console.log(error.message);
//   });


// // ===============================
// // 3️⃣ PENDING (Never resolves)
// // ===============================
// async function pendingExample() {
//   return new Promise(() => {
//     // no resolve, no reject → stays pending forever
//   });
// }

// const pendingPromise = pendingExample();
// console.log("⏳ Pending promise:", pendingPromise);


// // ===============================
// // 4️⃣ PENDING → FULFILLED (Delayed)
// // ===============================
// async function delayedSuccess() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve("⏱️ Promise fulfilled after 2 seconds");
//     }, 2000);
//   });
// }

// delayedSuccess().then(result => {
//   console.log(result);
// });

// let promise=new Promise((resolve,reject)=>{
//     console.log("I am a promise")
//     resolve("Success")  //A Promise can be resolved or rejected ONLY ONCE.After resolve():Any resolve() or reject() calls are ignored
//     reject("some error")
// })

// console.log(promise)


// function getdata(dataid,getnextdata){    //getnextdata: A function that will be executed after fetching data (optional).
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataid)
//             resolve("success")
//             // reject("error")
//             if(getnextdata){
//                 getnextdata()
//             }
//         },10000)
//     })
// }


// const getpromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am a Promise")
//     // setTimeout(() => {
//     //   reject(new Error("network error"))
//     // }, 0);
//     reject(new Error("network error"))
//   })
// }

// getpromise()
//   .then(res => console.log("resolved", res))
//   .catch(err => console.log("Handled:", err.message));


// // .then() and .catch()
// const getpromise=()=>{
//   return new Promise((resolve,reject)=>{
//     console.log("I am a Promise")
//         // resolve("promise is fulfilled")
//         reject("network error")
    
//   })
// }

// let promise=getpromise();
// promise.then((res)=>{
//     console.log("resolved",res)
// })
// promise.catch((err)=>{
//     console.log("The error is:",err);
// })
// let promise=getpromise();
// promise.catch((err)=>{
//     console.log("rejected",err)
// })


// Promise chain

// function asyncfunc1(){
//     return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//             console.log("some data1")
//             resolve("sucsess")
//          },4000)
//     })
// }

// function asyncfunc2(){
//     return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//             console.log("some data2")
//             resolve("sucsess")
//          },4000)
//     })
// }

// console.log("fetching data1")
// let p1=asyncfunc1()
// p1.then((res)=>{
//     console.log(res)
// })

// console.log("fetching data2")
// let p2=asyncfunc2()
// p2.then((res)=>{
//     console.log(res)
// })

// console.log("fetching data1")
// let p1=asyncfunc1()
// p1.then((res)=>{
//     console.log("fetching data2")
//     let p2=asyncfunc2()
//     p2.then((res)=>{
// })
// })



// //async function always returns promise

// async function hello() {
//     console.log("ka hal ba ho?")
// }

// function api(){
//     return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//              console.log("weather data")
//              resolve(2000)
//          },2000)
//     })
// }

// async function getweatherdata() {
//     await api();  //1st
//     await api();  //2nd
// }

// function getdata(dataid){    //getnextdata: A function that will be executed after fetching data (optional).
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataid)
//             resolve("success")
//             // reject("error")
//         },2000)
//     })
// }

// // async function getalldata(){
// //     console.log("getting data 1..")
// //     await getdata(1)
// //     console.log("getting data 2..")
// //     await getdata(2)
// //     console.log("getting data 3..")
// //     await getdata(3)
// // }


// //using IIFE

// (async function (){
//     console.log("getting data 1..")
//     await getdata(1)
//     console.log("getting data 2..")
//     await getdata(2)
//     console.log("getting data 3..")
//     await getdata(3)
// })()

fetch("https://google.com")
  .then(() => console.log("yes"))
  .catch(() => console.log("No"));

  fetch("https://thiswebsitedoesnotexist12345.com")
  .then(() => console.log("yes"))
  .catch(() => console.log("No"));



