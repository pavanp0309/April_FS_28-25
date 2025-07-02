// type of :operator used for checking type of datatype(value)


//Primitive (Immutable): cant change the Values

// let a=["heloo","bye" ]//--non-primitive
// console.log(a)
// console.log(a[0])
// console.log(a[0]="hii") // mutable -can change the value
// console.log(a)

// // immutable --primitive
// let b="hello"
// console.log(b)
// console.log(b[0])
// console.log("changing the value=",b[0]="Y")
// console.log(b)


// // 1.Number 
// let n=10
// let n1=10.8 // float
// console.log(n)
// console.log(typeof n) // number
// console.log(n1)
// console.log(typeof n1) // number

// // 2.string 
// // 1.using the string-literal 
//     //  1.using the single quotes==>''
//     //  2.using the double or Triple quotes==>"" ,'" '"
//     // 3.using the template literals==>`` --es6
// // 2.using the string global keyword 
//     //   eg: String()

// let str='hello babu👼' //single
// let str1="hello babu👼" // double
// let str2='"hello babu👼"' //triple
// let str3=`hello babu👼` //template-literal-backticks
// console.log(str)
// // console.log(str2)
// console.log(typeof str)//string
// console.log(typeof str1)//string
// console.log(typeof str2)//string
// console.log(typeof str3)//string

// // problems
// // multi line string
// // let str4='hello 
// //       babu👼' //single
// let str4='he\nll\no babu👼' //single
// console.log(str4)
// // solution
// let str5=`h
// ello 
// babu👼`
// console.log(str5)

// // problem : contentation
// let str6=str1+'bye'+str1
// console.log(str6)
// // sol
// let str7=`${str3}hello babu👼 ${str6}`
// console.log(str7)

// problem  :multi-string
// // let s='hello is dev's "
// // let s1=`hello "is" dev's `

// // eg: 
// // // console.log("1"+2)// 12 
// // console.log("heloo"+ +"2")// 12 
// // console.log(typeof +"2")//1
//  let d=String("hello")
//  console.log(typeof d)


// // boolean 
// console.log(typeof true)
// console.log(typeof false)

// // undefined :
// var a=undefined;
// console.log(a)
// console.log(typeof a)


// // null : no value 
// var b=null;
// console.log(typeof null)//object 


// // BigInt
// let maxsafeNum=Number.MAX_SAFE_INTEGER
// console.log(maxsafeNum)

// // 1st way 
// let bi=10n
// console.log(bi)
// console.log(typeof bi)
// // 2nd way 
// let bi2=BigInt(10)
// console.log(bi2)
// console.log(typeof bi2)
// console.log(10n*10n) //TypeError: Cannot mix BigInt and other types, use explicit conversions

// // symbol : 
// let st=Symbol("h") //100
// let st1=Symbol("h") //101
// console.log(st.description==st1.description)


// conversion 
// let val=parseInt(prompt("babu enter a value"))
// let val2=parseFloat(prompt("babu enter a value"))
// console.log(typeof val)
// console.log(typeof val2)


// Non-primtive datatypes
// oject-literal
// const per={
//     name:"raju",
//     details:{
//        mobile:34565,
//        add:"jntu"
//     }
// }

// console.log(per)
// console.log(typeof per)
// // accessing the Object values 
// // 1.with dot notation 
// console.log(per.name)//raju
// // 2.square bracket Notation
// console.log(per['name'])//raju
// // 3.using the Object.values keys entries
// console.log(Object.values(per))//(2) ['raju', {…}]
// console.log(Object.keys(per))//(2) ['name', 'details']
// console.log(Object.entries(per))//(2) [Array(2), Array(2)]

// // accessing the Nested object
// console.log(per.details) //{mobile: 34565, add: 'jntu'}
// console.log(per.details.mobile) //34565
// console.log(per.details.add) //jntu

// // inserting //updating deleting the value
// per.brand="pushpa" // creation
// per.name="raju bhai" //updation
// delete per.name; //deletion
// console.log(per)


// Array : it is a container which hold different types of data under a single variable name 
// Different ways to create an Array 
// array are always Numbered indexed 
// 1.using Array literals 
// let nameele=["ravi","raju","rani",true,{name:"ramu",age:24}] 
// // acccessiing the array values
// console.log(nameele)
// console.log(nameele[0])
// console.log(nameele[nameele.length-1])
// // inserting the values into arrays
// nameele[0]="hello"
// console.log(nameele)

// console.log(nameele)


// Function  :write Once and re-use as many time We require
// Types Of functions 
// Named function
// arrow function ---es6
// anonoumous function 
// Iffe :IMMEDIATELY INVOKED FUNCTION EXPRESSION 
// Higher-Order/CallBack functions 

function Example(val1='0',val2="3",val3,...r){ // params formal-arguments 
    // debugger;
    console.log(val1+val2)
    return val1+val2  // is the last statement of any function excution
}

// function will be excuted only when call that
//  Example(3,2,4,5,5,6)
//  Example(3,10)
var re=Example()
var re=Example(5,5)
 console.log(re*4)


 function addtocart(n){
    alert("added to cart",n)
 }

 function Doubt(a,b){ //Formal parameter
    console.log(a)
    console.log(b)
 console.log(" i am ready ")
 }
 Doubt(10,)  //actual paramters