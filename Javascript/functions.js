// function are Reuseable block of code which will excute group statements together

// REALTIME USEAGE
// models
// login forms
// cart functionalities
// payment functionalities
// search_functionalities
// login -->datafetching--->function profile-crud

// Different Types Of Functions
// 1.Named Functions
// 2.Arrow functions---> es6
// 3.anonoums function
// 4. IIFE (Immediately invoked Function expersions)
// 5.callback functions and higher order
// 6.generator function

// 1.Named Function  function with Name(identifier)

// Rules for Decalaring Identifiers
// function name shouldnot contain white spaces and special character except $ and _
// function name shouldnot contain reserved keyword
// function name shouldnot start with number

// 2.
// syntax
// function are excuted only when we call the Function
function ModelBox() {
  // block of code
  alert("welcome to js World");
}

// ModelBox()

// function with Parameters and arguments
// Parameters :params formal arguments : these are varaibles passed in function declaration
//  Types of Parameters
//   1. default Paramater
//  2. rest Paramaters

// actual arguments : these are values or variables at function calling
// syntax
// function decalartion
// function Data(a,b){ //Parameters :params formal arguments
// //  block of code
//  console.log(a,b)

// }
// // function call
// Data(10,"hello") // actual values

// Problem
// function caliculate(a,b,c,d,e,f,g,h){
//  console.log(a+b+c+d+e+f+g+h)
// }

// // calling the function
// caliculate(10,20) // first person
// caliculate(10,20,40) // first person
// caliculate(10,20,40,40,80,80,46,75) // first person

// Solution
// function DefaultCart(a, b, c) {
//   console.log(`a:${a} ,b:${b} ,c:${c}`);
//   if (c == undefined) {
//       c = 0;
     
//   }
//    console.log(a + b + c);
// }

// // DefaultCart(1, 4, 5);//10
// // DefaultCart(1, 4);


 function DefaultCart1(a=2, b=1, c=0) {
//   console.log(`a:${a} ,b:${b} ,c:${c}`);

//    console.log(a + b + c);
}

// // DefaultCart1(1, 4, 5);//10
// // DefaultCart1(1, 4);
// // DefaultCart1(1, 4,7);
// // DefaultCart1();


// // solution_2
// // Rest parameter must be last formal parameter
// function TooMany(a,b,c,...d){
//  console.log(`a:${a} ,b:${b} ,c:${c},rest:${d}`)
//  console.log(d) // all values will be collected in the array format
//  console.log(d[0]) // all values will be collected in the array format
//  console.log(d[2]) // all values will be collected in the array format
// //  let res=d.reduce((acu,t)=>acu+t)
// // d.forEach(val=>console.log(val))
// // for(let i=0;i<d.length;i++){
// //     console.log(d[i])
// // }
// //  console.log(res)

// }
// // TooMany(10,3,4,5,6,7,293,4,6,7,8,9,9,0,0,3,5,6,7,)

// // is the laste exution statement of any function  (code inside function will excute upto return)

// // function ReturnMe(){
// //     debugger
// //     let a=10
// //     var b=10
// //     return [a,b]
// // }
// // let res=ReturnMe()




// // 2 .ARROW FUNCTIONS_  🏹 

// // def : syntatic sugar of named function  (simpler way of wriiting the Named function)

// // Named Function decalaration
function addtocart(){
//  code ...

}
// calling Named function
addtocart()

// // syntax :
// let addtocart1=()=>{} // declartion
// // calling the arrow function
// addtocart1() // call arrow function with varaible name


// // difference 
// // 1.arrow function Doesnt Require paranthesis () when we pass single parameter
// // eg: 
// // @ params : a
// // @arguments 10
// // single parameter : doesnt require paranthesis
// let arr=a=>console.log(a)
// arr(10)

// // multiple paramters --requires paranthesis
// let arr1=(a,b)=>console.log(a)
// arr(10)

// // function arr1 (a){ //require paranthesis

// // }

// // 2. arrow functions doesnt require the return and curly  when we have single expression or statement
// // let data=()=>expression

// // single expression
// let example=(a,b)=>a+b // not required return as we pass one expression
// let res=example(10,20)
// console.log(res)

// // multiple expression :requires return and curly braces
// let example2=(a,b)=>{
//   a+b
//   a-b
//   return a+b, a-b   //requires return when we pass multiple expression
// }
// let res3=example2(10,20)
// console.log(res3)

// // function example1(a,b){ 
// //   a+b // returns undefined if return statement is not passed 
// // }

// // let res1=example1(10,20)
// // console.log(res1)

// // arrow function doesnt have its own these keyword  binding 

// // this keyword 
// // goal : it is used for pointing out the different object location based on the context it used 

// // global scope 
// console.log(this) // it points to window Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// // function scope
// function sample(){
//   console.log(this) //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// }
// sample()

// // in object 
// let Person ={
//   name:"raju", // property:value
//   // method : can perform action
//   details:function sample(){
//   console.log(this) //  it points to current objects
// }
// }

// console.log(Person.name) //calling the Property
// console.log(Person.details()) //calling the method //{name: 'raju', details: ƒ}


// let Person1 ={
//   name:"raju", // property:value
//   // method : can perform action
//   details:()=>{
//   console.log(this) //  Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// }
// }

// console.log(Person1.name) //calling the Property
// console.log(Person1.details()) //calling the method //{name: 'raju', details: ƒ}


// Hoisting:
// debugger
//   
// arrow function doesnt have its own arugument object 
// function arg(){
//  console.log(arguments) //argument object
// }
//  arg(1,2,3,4,5)

// let arga=()=>console.log(arguments)
//  arga(1,2,3,4,5)

//  usecases : higher order function 
//  Map(()=>)
//  filter(()=>)
//  array.forEach(element => {
  
//  });(()=>)
  // events 

//   // arrow function cannt be used as constructuor function 
//   function User(name,age){
//     this.name=name
//    this.age=age
//   }

//   let Ravi=new User("ravikumar",20) //blueprints of an object
//   console.log(Ravi) 

// let  Users=(name,age)=>{
//     this.name=name
//    this.age=age
//   }

//   let Ravi1=new Users("ravikumar",20) //blueprints of an object
//   console.log(Ravi) 


//  let a=s=>{
//    return
//  }



// Function expressions 
// let a=c+d 
// function without name we call it anonumous function 
// let e=function(){
//  console.log("hello")
// }  

// // calling arrow function 
// e()

// named function expression
// console.log(e1)
// var e1=function data(a,b){
//  console.log("hello")
//  return a+b
// }  

// let rs=e1(1,4)
// console.log(rs)

// var a=10
// var a=10


// IIFE   : immeditaly invoked function expression
// let iff=(
//   function(){
//   console.log("iffe function")
//   var a=20
// }
// )()

// CallBack functions 
// function A(callback){
//  console.log("start-0")
//  console.log(callback())
// }
// function B(){
//    console.log("start-1")
// }
// A(B)


// load items 
// addtocart 
// displayitems --increment item decrement-item delete item
// carticon 
// cart-total 
// payment 
// filling the card details 



 let example={
    name:"ramu" ,//property : value:string
    details:function(){
      console.log(this.name.toUpperCase())
    } // prop:details value: function
  }
  console.log(example.name)
  console.log(example.details())

  let a=new String("hello")
  console.log( a)