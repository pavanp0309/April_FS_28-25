// Promises :
//  5pm -i will meet at park
//  url -- backend
//    pending  --not decided
//    rejected -failure
//    resolved --success

// let a=new Promise((resolve,rejected)=>{
//     let status=200
//     if(status==200){

//           resolve(JSON.stringify({name:"raju"}))
//     }else{

//         rejected(`sorry i will meet later😥${status}`,)
//     }
// })
// console.log(a)
// a.then((data)=>{
//     // document.write(data)
//     console.log(data)
//     return data
// }).then((res)=>{
//     console.log("res",res)
//    let val= JSON.parse(res)
//    console.log("val",val)
//    document.write(val.name)
// })
// .catch((err)=>[
//      document.write(err)
// ])

// function PromiseMe(resolve,reject){
//    console.log("promise,,,pending")
//    let status=201
//    if(status==200){
//       return resolve("hello i meet u")
//    }else{
//     return reject("failed to meet u 404")
//    }
// }
//  function RejecteMe(){
//      console.log("i am rejected by server")
// }

//  function resolveMe(data){
//            console.log(data)
//            return data
// }

// let res=PromiseMe(resolveMe,RejecteMe)
// console.log(res)

// take three functions A B C
// synchronus functions
// function A(){
//  console.log("A")
// }
// function B(){
//      console.log("B")
// }
// function C(){
//      console.log("C")
// }
// // call these Function
// A()
// B()
// C()

// function A(callback1,callback2){
//     debugger
//  console.log("A")
// //  console.log(callback1)
//  callback1()
//  callback2()
// }
// function B(){
//        debugger
//      console.log("B")
// }
// function C(){
//        debugger
//      console.log("C")
// }

// A(B,C)
// function dummy(){

// }
//  dummy()

// function Login(data,ui){
//    ui(data)
// }

// function UI(data){
//     console.log("welcome",data)
// }
// Login("Raju",UI)

// login--ui--welcome--shop-addtocart--

function Register(username, logincall) {
  console.log("register");
  logincall(username);
}
function Login(username, welcall) {
  console.log("login", username);
  welcall(username);
}
function welcome(username, shopcall) {
  console.log("welcome", username);
  shopcall(username);
}
function Shop(username, addcall) {
  console.log("Shop", username);
  addcall(username);
}
function AddTocart(username, checkcall) {
  console.log("AddTocart", username);
  checkcall(username);
}
function checkout(username) {
  console.log("checkout", username);
}
Register("srinivas", function (user) {
  Login(user, function (user) {
    welcome(user, function (user) {
      Shop(user, function (user) {
        AddTocart(user, function (user) {
          checkout(user);
        });
      });
    });
  });
});


function A(B){
    console.log("hii")
   B()
}
function B(m){
console.log("bye"),m()
   
}
function M(){
    console.log("4765")
}

A(function(){
    console.log("hhh")
    B(M)
})