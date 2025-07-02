// Indetifiers Rules

// //1. special symbols
// var a ; // correct way
// // var @a ; //Uncaught SyntaxError: Invalid or unexpected
// // var %a ; //Uncaught SyntaxError: Invalid or unexpected
// var $a ; //✔✔✅✅
// var _a ; //✔✔✅✅

// // 2.shouldnot start with numerical values
// // var 3h //Uncaught SyntaxError: Invalid or unexpected token
// var h3; //✔✔✅✅

// // 3.it should contain reservered keyword

// // var var; //Uncaught SyntaxError: Unexpected token 'var
// // var for; //Uncaught SyntaxError: Unexpected token 'var
// // 'for' is not allowed as a variable declaration name.
// // var class

// // 4.it shouldnot contain white space ;
// //  var full name  //Uncaught SyntaxError: Unexpected identifier 'name
//  var full_name  ; //✔✔✅✅

// //  Casesenstive
// var d=10;
// var D=12;
// console.log(d)
// console.log(D)

// // dynamically typed
// var c=10
// console.log(typeof c) //number
// var c="hello"
// console.log(typeof c) //string
// var c=true
// console.log(typeof c) //boolean

// ___________________ DECLARATION_______________________

// var a;
// console.log(a) // undefined
// let b;
// console.log(b) // undefined
// // const c;
// // console.log(c) // ncaught SyntaxError: Missing initializer in const declaration

// // corret way
// const c=10 //'const' declarations must be initialized
// console.log(c)

// Difference :var and let keywords decalaration are allowed but const decalaration are not allowed with iniitalization

// ___________________ RE_DECLARATION_______________________

// var re;
// var re;
// console.log("redec",re)
// console.log("redec",re)

// let re1; //Cannot redeclare block-scoped variable 're2'
// let re1; //SyntaxError: Identifier 're1' has already been declared

// const re2=10; //Cannot redeclare block-scoped variable 're2'
// const re2=10; //SyntaxError: Identifier 're2' has already been declared

// DIfference : var can be redeclared but let & const Cannot be redeclared in same scope

// ___________________SCOPE WTH RE_DECLARATION_______________________

// // global scope
// var g=10
// let g1=20
// const g2=30
// console.log("gs",g)
// console.log("gs",g1)
// console.log("gs",g2)

// block-scope : any block conditional function block class or object
{
  // var g=10
  // let g1=20
  // const g2=30
  // console.log("gbs",g)
  // console.log("gbs",g1)
  // console.log("gbs",g2)
}
// console.log("gbs",g)
// console.log("gbs",g1) //Uncaught ReferenceError: g1 is not defined
// console.log("gbs",g2) //varaibles.js:94 Uncaught ReferenceError: g2 is not defined

// function scope
function example() {
  console.log("function-block");
  var g = 10;
  let g1 = 20;
  const g2 = 30;
  console.log("gfs", g);
  console.log("gfs", g1);
  console.log("gfs", g2);
}

// calling the function
// example()

// console.log("gfs",g) //ReferenceError: g is not defined
// console.log("gfs",g1) //ReferenceError: g1 is not defined
// console.log("gfs",g2) //ReferenceError: g2 is not defined

// function example(){
//     debugger;
//   var g=10
// let g1=20
// const g2=30
// }
// example()

// 

// VAR          Not req with initialization (default:undefined)
// let           Not req with initialization (default:undefined)
// CONST           req with initialization

// redeclaration 
// VAR         possible
// let          not possible 
// CONST   not possible 

// SCOPE
// var is function scoped 
// let and const is block scoped 

// HOISTING :MOVING ALL DECLARATION to top of there scope 
// DECLARATION(creation)
// debugger
// console.log(a)//undefined
// console.log(b)//undefined
// var a=10
// let b=20
// const c=30

// function example(){
//   console.log(a) // before decalaration
//  let a=10

// }
// console.log(a) //block scope

// var #a=10
// console.log(typeof a)

