// why we use ?& where use
// 1.to store grouph of data (it reduce storage_space)
    //  to store grouph of cart items 
    // mails,messages ,user data (login information of different)
    // products
    // esay for accessing and removing easy to perform
    //  crud
    // search filters 
    // api_data

// arrays are used for storing different kinds of data (data types (values)) under a single varibale name

// different ways to create arrays 
// 1.array literal method 
// 2.using the string global keyword
// 3.using the new keyword 

// let a=[] // array literal method
// console.log(typeof a)
// // console.log(a.length) //property


// let a1=[1,2,"hello",{name:"raju"},true]

// // arrays always numbered indexed 
// // accessing the data 
// console.log(a1[0])
// console.log(a1[1])

// // using the loops 
// // for(let i=0;i<a1.length;i++){
// //     console.log("i",i)
// //     console.log("val",a1[i])
// // }

// // for(let i in a1){
// //     console.log(a1[i])
// // }

// // to modify the values
//  a1[0]=10
//  a1[3]="bye"
//  console.log(a1)


//  Methods 
// Basic Methods 
// push---> adding the element to the end of array 
// pop--- used for removing the element from the last
// shift---> used for removing an element from start
// unshift ---> used for adding an element an element from start
// slice:is used extracting the part of an arrays 
// splice: which is used for adding and removing element from array 
// indexof
// lastindexof

// higher order methods
// map 
// filter 
// reduce 
// foreach 
// sort 
// find  
// findIndex 
// reverse 


// let bodyparts=["hair" ,"shirt" ,"pant" ,"shoes"]
// Pop:Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// console.log(bodyparts.pop())//shoes
// console.log(bodyparts.pop())//shoes

// Push :Appends new elements to the end of an array, and returns the new length of the array.
// console.log(bodyparts)
// console.log(bodyparts.push("shoepolish"))
// console.log(bodyparts)

// shift 
// Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// console.log(bodyparts.shift())//hair
// console.log(bodyparts.shift())//shirt

// unshift :
// nserts new elements at the start of an array, and returns the new length of the array
// console.log(bodyparts.unshift("oil"))
// console.table(bodyparts)

// let data=[1,2,3,4,5,6,7,8]
// let even=[]
// for(let i=0;i<data.length;i++){
//     if(data[i]%2==0){
//         even.push(data[i])
//     }
// }
// console.log(even)


// slice method slice(startindex,endindex)
// console.log(bodyparts.slice()) // ['hair', 'shirt', 'pant', 'shoes']
// console.log(bodyparts.slice(2)) // ['pant', 'shoes']
// console.log(bodyparts.slice(1,3))//['shirt', 'pant']
// console.log(bodyparts.slice(-1,-3)) // [] startindex>endindex==>empty

// splice :splice(start: number, deleteCount?: number)
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// console.log(bodyparts.splice())//[]
// console.log(bodyparts)
// // // console.log(bodyparts.splice(1))//[]
// // console.log(bodyparts.splice(1,1))//['shirt']
// // console.log(bodyparts.splice(1,2))//['pant', 'shoes']
//  console.log(bodyparts.splice(1,1,"raincourt","coverthebag"))
//  console.log(bodyparts)


// let idontknow=[1,2,3,4,5,6,7,8,9,10]
// let r=idontknow.filter(ele=>ele%2==0)
// console.log(r)


// function whymethods(a){
//  console.log(a)
//  let newArray=[] // new array to add element that are multiplied
//   for(let i=0;i<a.length;i++){
//     console.log(a[i]*2)
//     newArray.push(a[i]*2)
//   }
//   return newArray
// }
// let res=whymethods(idontknow)
// console.log(res)

// function newdata(e){
// let neweven=[] // new array to add element that are multiplied
//   for(let i=0;i<e.length;i++){
//     if(e[i]%2==0){
//      neweven.unshift(e[i])
//     }
//   }
//   return neweven
// }
// let even=newdata(res)
// console.log(even)



// console.log(ar.map())
// map(function(){})
// map(()=>{})
// function Callme(){

// }
// map(Callme)
// function callme(ele,index,newarr){

// }
// map(function(ele,index,newarr){})
// map((ele,index,newarr)=>{})
// map(callme)

let ar=[1,2,3,4,5,6,7,8,9,10]

// let res=ar.map(function(ele,index,newar){
//   console.log("ele",ele*4)
//   console.log("index",index)
//   console.log("newarr",newar)
//   return ele*3
// })
// console.log(res)

// let res1=ar.map(function(_,index,_){

//   console.log("index",index)

//   return index*3
// })
// console.log(res1)


// let oddnum=[]
// for(let i=0;i<ar.length;i++){
//   if(ar[i]%2!==0){
//   oddnum.push(ar[i])
//   }
// }console.log(oddnum)

// let res2=ar.filter((ele,index,newar)=>{
//    return ele%3==0
// })
// console.log(res2)

let ar1=[1,2,3,4,5,6,7,8,9,10]
// let res3=ar1.reduce((total,ele,index,newarra)=>{
//  console.log("total",total)
//  console.log("ele",ele)
//  return total+ele
// },100)

let forme1=ar1.map((ele,i,newarr)=>ele*2)
let forme=ar1.forEach((ele,i,newarr)=>ele*2)
console.log(forme1)
console.log(forme)


// let sort=forme1.sort((a,b)=>{
//   console.log("a",a)
//   console.log("b",b)
// })
// console.log(sort)

let data=forme1.reverse()
console.log(data)