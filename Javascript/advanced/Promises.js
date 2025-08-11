// // Promises :
// //  5pm -i will meet at park
// //  url -- backend
// //    pending  --not decided
// //    rejected -failure
// //    resolved --success

// // let a=new Promise((resolve,rejected)=>{
// //     let status=200
// //     if(status==200){

// //           resolve(JSON.stringify({name:"raju"}))
// //     }else{

// //         rejected(`sorry i will meet later😥${status}`,)
// //     }
// // })
// // console.log(a)
// // a.then((data)=>{
// //     // document.write(data)
// //     console.log(data)
// //     return data
// // }).then((res)=>{
// //     console.log("res",res)
// //    let val= JSON.parse(res)
// //    console.log("val",val)
// //    document.write(val.name)
// // })
// // .catch((err)=>[
// //      document.write(err)
// // ])

// // function PromiseMe(resolve,reject){
// //    console.log("promise,,,pending")
// //    let status=201
// //    if(status==200){
// //       return resolve("hello i meet u")
// //    }else{
// //     return reject("failed to meet u 404")
// //    }
// // }
// //  function RejecteMe(){
// //      console.log("i am rejected by server")
// // }

// //  function resolveMe(data){
// //            console.log(data)
// //            return data
// // }

// // let res=PromiseMe(resolveMe,RejecteMe)
// // console.log(res)

// // take three functions A B C
// // synchronus functions
// // function A(){
// //  console.log("A")
// // }
// // function B(){
// //      console.log("B")
// // }
// // function C(){
// //      console.log("C")
// // }
// // // call these Function
// // A()
// // B()
// // C()

// // function A(callback1,callback2){
// //     debugger
// //  console.log("A")
// // //  console.log(callback1)
// //  callback1()
// //  callback2()
// // }
// // function B(){
// //        debugger
// //      console.log("B")
// // }
// // function C(){
// //        debugger
// //      console.log("C")
// // }

// // A(B,C)
// // function dummy(){

// // }
// //  dummy()

// // function Login(data,ui){
// //    ui(data)
// // }

// // function UI(data){
// //     console.log("welcome",data)
// // }
// // Login("Raju",UI)

// // login--ui--welcome--shop-addtocart--

// // function Register(username, logincall) {
// //   console.log("register");
// //   logincall(username);
// // }
// // function Login(username, welcall) {
// //   console.log("login", username);
// //   welcall(username);
// // }
// // function welcome(username, shopcall) {
// //   console.log("welcome", username);
// //   shopcall(username);
// // }
// // function Shop(username, addcall) {
// //   console.log("Shop", username);
// //   addcall(username);
// // }
// // function addTocart(username, checkcall) {
// //   console.log("AddTocart", username);
// //   checkcall(username);
// // }
// // function checkout(username) {
// //   console.log("checkout", username);
// // }
// // Register("srinivas", function (user) {
// //   Login(user, function (user) {
// //     welcome(user, function (user) {
// //       Shop(user, function (user) {
// //         addTocart(user, function (user) {
// //           checkout(user);
// //         });
// //       });
// //     });
// //   });
// // });

// // document.addEventListener("",()=>{
// //    load()
// // })

// // function A(B){
// //     console.log("hii")
// //    B()
// // }
// // function B(m){
// // console.log("bye"),m()

// // }
// // function M(){
// //     console.log("4765")
// // }

// // A(function(){
// //     console.log("hhh")
// //     B(M)
// // })
// // console.log("started......something")
// // function login(username,callback){
// //   console.log("login")
// //   callback(username)
// // }
// // function Exploreshop(username,callback){
// //   console.log("explore shop",username)
// //   callback(username)
// // }
// // function AddTocart(username,callback){
// //   console.log("addtocart")
// //   callback(username)
// // }
// // function checkout(username,callback){
// //   console.log("checkout")
// //   callback(username)
// // }
// // function AddressDetailes(username,address,callback){
// //   console.log("address")
// //   callback(username,address)
// // }
// // function Payment(username,address,price,callback){
// //    console.log("payment")
// //    callback(username,address,price)
// // }
// // function OrderSuccess(username,address,price,callback){
// //    console.log("order")
// //    callback(username,address,price)
// // }
// // function TrackOrder(username,address,price){
// //    console.log("trackorder")
// //    console.log("username",username)
// //    console.log("price",price)
// //    console.log("address",address)
// //    console.log("order on the way")
// // }

// // // callback : one function passed as an argument and return as value
// // login("Mahesh",function(username){
// //  Exploreshop(username,function(username){
// //   AddTocart(username,function(username){
// //       checkout(username,function(username){
// //         AddressDetailes(username,"jntu",function(username,address){
// //          Payment(username,address,100,function(username,address,price){
// //            OrderSuccess(username,address,price,function(){
// //              TrackOrder(username,address,price)
// //            })
// //          })
// //         })
// //       })
// //   })
// //  })
// // })
// // console.log("coming fast ... u said u have started")

// console.log("started......something")
// function login(username,callback){
//   debugger
//   console.log("login")
//   setTimeout(()=>{
//     callback(username)
//   },1000)
// }
// function Exploreshop(username,callback){
//   console.log("explore shop",username)
//  setTimeout(()=>{
//     callback(username)
//   },1000)
// }
// function AddTocart(username,callback){
//   console.log("addtocart")
//   setTimeout(()=>{
//     callback(username)
//   },1000)
// }
// function checkout(username,callback){
//   console.log("checkout")
//   setTimeout(()=>{
//     callback(username)
//   },1000)
// }
// function AddressDetailes(username,address,callback){
//   console.log("address")
//   setTimeout(()=>{

//     callback(username,address)
//   },1000)
// }
// function Payment(username,address,price,callback){
//    console.log("payment")
//    setTimeout(() => {

//      callback(username,address,price)
//    }, 1000);
// }
// function OrderSuccess(username,address,price,callback){
//    console.log("order")
//    setTimeout(() => {
//     callback(username,address,price)
//    }, 1000);
// }
// function TrackOrder(username,address,price){
//    console.log("trackorder")
//    console.log("username",username)
//    console.log("price",price)
//    console.log("address",address)
//    console.log("order on the way")
// }

// // callback : one function passed as an argument and return as value
// login("Mahesh",function(username){
//  Exploreshop(username,function(username){
//   AddTocart(username,function(username){
//       checkout(username,function(username){
//         AddressDetailes(username,"jntu",function(username,address){
//          Payment(username,address,100,function(username,address,price){
//            OrderSuccess(username,address,price,function(){
//              TrackOrder(username,address,price)
//            })
//          })
//         })
//       })
//   })
//  })
// })
// console.log("coming fast ... u said u have started")

// debugger
// console.log("helloo-start")
// function sample(){
//   debugger
//   setTimeout(()=>{
//     console.log("helo")
//   })
// }
//  sample()
// console.log("end")
// choose food -addtocart--applycoupn -total-checkout-ordersuccessful

// username
// choseanfood,price
// applied coupn
// total
// function login(callback){
//     callback()
// }

// login(function(register,checkout){})

// let data=new Promise(function(resolve,reject){
//     // resolve(" i got the data")
//     reject("error")
// })
// console.log(data)// pending--fullfilled-reject   url(www.amazon.in)--gets the data(fullfilled)-rejected

// function login(username) {
//   return new Promise((resolve, reject) => {
//     resolve(username);
//     // reject("error while login")
//   });
// }
// login("ravikumar")
//   .then(function(data) {
//     console.log("login");
//     return data;
//   })
//   .then((username) => {
//     console.log("welcome", username);
//     return username;
//   })
//   .then((username) => {
//     console.log("shop ur fav things", username);
//     return username;
//   })
//   .then((username) => {
//     console.log("checkout", username);
//     return username;
//   }).catch((err)=>{
//       console.log(err)
//   });


//   function Guessout(){
//          return 
//   }
//   let res=Guessout()
//   console.log(res) //undifined
//   console.log(res*3) //NaN
// console.log("start")
// async function Guessout1(){
//     let data=[]
//         for(let i=0;i<1000000; i++){
//             data.push(i)
//         }
//     return await data
//   }
//   let res1=Guessout1()
//   console.log(res1) //
// //   res1.then((data)=>{
// //    console.log(data)
// //   })
// console.log("come fast")

// async function data(){
//    return await "hello" //promise
// }

// let res=data()
// console.log(res)// promise 

// let data=fetch('https://fakestoreapi.com/products')
// console.log(data)
// data.then(async(res)=>{
//     // console.log(res.json())
//     return await res.json()
// }).then(async(data)=>{
//     document.write(data.map((ele)=>document.write(ele.title)))
// })
// weather api 