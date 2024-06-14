"use strict";
// --------
// ////*****      Assignment Question # 1        *****\\\\
// --------
// async function fetchGreeting(){
//     await
//     setTimeout(() => {
//         console.log("Hello Asifa");
//     }, 2000);
// }
// fetchGreeting();
// ----------
////*****      Assignment Question # 2        *****\\\\
// ----------
// function simulateTak(){
//     console.log("Task Started");
//     setTimeout(() => {
//         console.log("Task Completed");
//     }, 1000);
// }
// simulateTak();
// -----------
////*****      Assignment Question # 3        *****\\\\
// -----------
// function fetchData(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Data fetch successfully!")
//         }, 1000);
//     })
// }
// fetchData().then((respones)=>{console.log(respones);
// })
// --------
////*****      Assignment Question # 4        *****\\\\
// let num : number = 5
// function fetchWithError(){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             if (10 < num) {                
//         res("Data fetch successfully")
//             } else {               
//         rej("Data fetch failed") 
//             }
//         }, 1000);
//     })
// }
// fetchWithError().catch((error)=>{console.log(error)})
// -------
////*****      Assignment Question # 5        *****\\\\
// -------
// let a = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("hi");
//             resolve("")
//         }, 2000);
//     })
// }
// a()
function fetchData() {
    return new Promise((resolve) => {
        resolve("Data fetch successfully!");
    });
}
function executeSequentially() {
    let call = fetchData().then((respones) => { console.log(respones); });
    let processData = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("Process Data successfully");
                resolve("");
            }, 2000);
        });
    };
    return processData();
}
executeSequentially().then((respones) => { respones; });
