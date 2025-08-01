// // // property

// // // Window : global context for all
// // // var a=10 //property added to global window object
// // // function b(){} //method added to window object

// // // screen
// // console.log(screen)
// // console.log(screen.availHeight)
// // console.log(screen.availWidth)
// // console.log(screen.height)
// // console.log(screen.width)
// // console.log(screen.colorDepth)
// // console.log(screen.orientation.type)
// // // if(screen.availWidth<576){
// // //     alert("switch to desktop mode")
// // // }
// // // if(screen.orientation.type=="portrait-primary"){
// // //     console.log("turn on landscape-primary")
// // // }

// // // Location :(url information)
// // console.log(location)
// // console.log(location.port) // backend ports: 3000 5000 8000 8080(common)
// // // if(location.port==5500){
// // //     console.log("data sent")
// // // }

// // // console.log(location.pathname) /// endpoint
// // // if(location.pathname=="/admin"){
// // //     console.log("admin dashbaord")
// // // }else if(location.pathname=="/vendor"){
// // //     console.log("vendor dashbaord")
// // // }else if(location.pathname=="/user"){
// // //  console.log("shop page")
// // // }

// // console.log(location.protocol) // http and https
// // // if(location.protocol=="http:"){
// // //     confirm("these site is not secure do you proccedd")
// // // }
// // console.log(location.hostname) //127.0.0.1(not includes port) localhost (commonly for backend server),127.01.01
// // // mongodb://localhost:27017/
// // console.log(location.href) // protocal+hostname+port+path+searchparameter
// // console.log(location.host) // includes port  127.0.0.1:5500

// // function Jump(){
// //     // location.href="https://rta.ibomma.foo/"
// //     // location.assign("https://rta.ibomma.foo/")
// //     // location.replace("https://rta.ibomma.foo/")
// //     location.reload()
// // }

// // console.log(navigator.appName)
// // console.log(navigator.appCodeName)
// // console.log(navigator.appVersion)
// // console.log(navigator.cookieEnabled)
// // console.log(navigator.vendor)
// // // console.log(navigator.geolocation.getCurrentPosition())
// // // console.log(navigator.geolocation.watchPosition())
// // // console.log(navigator.geolocation.clearWatch())

// // Storage webapi
// //  to store the data permently or temporily we use it  inside the Browser

// // The max_limit it can store  5mb-10mb
// // localStorage: remebers the data Eveen after the tab is closed or meved to next tab
// // sessionStorage: remebers the data  until the tab is opened or meved to next tab

// // CRUD :Create Read Update Delete
// // Create :setItem and upadation
// // localStorage.setItem()
// // Read : getItem
// // localStorage.getItem()
// // Delete : removeItem and clear
// // localStorage.removeItem() // removes single Items
// // localStorage.clear() //remmoves all data

// // creation and updation method
// localStorage.setItem("user", 7995524942);
// localStorage.setItem("user1", "Ravikumar");
// localStorage.setItem("user2", true);

// // Json.stringfy()
// // normal format object
// let data = {
//   name: "raju",
//   mobile: 177987,
//   active: true,
// };
// // serilized object
// // json :javascript object notation
// // let data1={
// // "name":"raju",
// // "mobile":177987,
// // "active":true
// // }
// localStorage.setItem("userinfo", JSON.stringify(data));

// let users = [
//   {
//     name: "raju",
//     mobile: 177987,
//     active: true,
//   },
//   {
//     name: "raju",
//     mobile: 177987,
//     active: true,
//   },
//   {
//     name: "raju",
//     mobile: 177987,
//     active: true,
//   },
//   {
//     name: "raju",
//     mobile: 177987,
//     active: true,
//   },
// ];
// localStorage.setItem("userinfos", JSON.stringify(users));



// // Read the Data 
// // let datas=localStorage.getItem("user")
// // console.log(datas)
// // let datas1=localStorage.getItem("user1")
// // console.log(datas1)
// // let datas2=localStorage.getItem("user2")
// // console.log(datas2)
// // let datas3=JSON.parse(localStorage.getItem("userinfo"))
// // console.log(datas3)
// // let datas4=JSON.parse(localStorage.getItem("userinfos"))
// // console.log(datas4)


// // delete 
// // localStorage.removeItem("user2")
// // localStorage.removeItem("user1")
// // localStorage.clear()

// // sessionStorage.setItem("user","ravikumar")
// sessionStorage.setItem("userinfos", JSON.stringify(users));
// JSON.parse(sessionStorage.getItem("userinfos"))
// // sessionStorage.getItem("user")
// // sessionStorage.removeItem("user")


// setTimeout
// setInterval

// What is Js ,
// single Threaded: it default engine behaviour line by line
// synchrounous  : the way of excution of code line by line
// can js perform async operation 
// what is callstack 

// console.log("start")
// console.log("middle")
// console.log("end")

// function first(){
//     debugger
//     console.log("hello 1")
//     second()
    
// }
// function second(){
//     debugger
//     console.log("hello 2")
  
//     third()
// }

// function third(){
//     debugger
//     console.log("hello 3")
// }

// first()

// debugger
// console.log("hello-1")


// setTimeout(()=>{
//     debugger
//     console.log("hello-2")
// },1000)
// console.log("hello-3")

// setInterval(()=>{
//     console.log("hello")
// },1000)

