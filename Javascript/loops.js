
// for(initialization;condition ;increment/decrement){
//     //code here
// }

// for(let i=1;i<=10;i++){
//     console.log("bow")
// }
// // for(let i=1;i<=10;i++){
// //     console.log("bow")
// //     if(i%2==0){
// //         console.log(i)
// //     }
// // }

// // for(let i=10;i>=1;i--){
// //     console.log("wob")
// // }

// // let n=10
// // for(let i=2;i<=n;i+=2){
// //     console.log(i)
// //     i+=4
// // }

// // // initialization
// // while(condition){
// // //  increment 
// // }

// // let i=1
// // while(i<=10){
// //     console.log("hello")
// //     i++
// // }



// // what is loop ?

// // 1.where to start  i=1
// // 2.where to stop   i<=10
// // 3.how we need to doo  (how we need to b/w these start and stop) i++
// // 4.what output u  console.log(i)


// // for(let i=1;i<=10;i++){
// //     debugger;
// //     console.log(i)
// // }

// // write a function to print even number from 1 to n using the for loop 
// function evenNumber(n){
//  console.log("n",n)
//  for(let i=1;i<=n;i++){
//     console.log("i",i%2==0)
//     if(i%2==0){
//         console.log(i)
//     }
//  }
// }
// evenNumber(10)

// // write a function to print odd number from 1 to n using the for loop 
// function oddNumber(n){
//  console.log("n",n)
//  for(let i=1;i<=n;i++){
//     console.log("i",i%2!==0)
//     if(i%2!==0){
//         console.log(i)
//     }
//  }
// }
// // oddNumber(10)
// // write a function to print  number from 1 to n in reverse order using the for loop  
// function reverseNumber(n){
//  console.log("n",n)
//  for(let i=n;i>=1;i--){
//         console.log(i)
//  }
// }
// // reverseNumber(10)

// // write a function to caliculate the sum of even number from 1 to n using the for_loop
// function sumOfEvenNumber(n){
//  console.log("n",n)
//  let sum=0
//  for(let i=1;i<=n;i++){
//         console.log(i)
//        if(i%2==0){
//          sum+=i
//        }
//  }
//  return sum
// }
// // let res=sumOfEvenNumber(10)
// console.log(res)
// write a function to caliculate the sum of odd number from 1 to n using the for_loop
function sumOfEvenNumber(n){
 console.log("n",n)
 let sum=0
 for(let i=1;i<=n;i++){
        console.log(i)
       if(i%2!==0){
         sum+=i
       }
 }
 return sum
}
// let res1=sumOfEvenNumber(10)
// console.log(res)

// // write a function that counts the number of odd number from  1 to n using for loop
//  function sumOfEvenNumber(n){
//  console.log("n",n)
//  let count=0
//  for(let i=1;i<=n;i++){
//         console.log(i)
//        if(i%2!==0){
//         count++
//        }
//  }
//  return count
// }

// write a function to reverse the given string using for loop without using the inbuilt functions
 function reverseString(str){
  console.log(str.length) //startpoint
  let revesestr="" //to store the reversed string
  for(let i=str.length-1;i>=0;i--){
     console.log(str[i])
     revesestr+=str[i]
  }
 return revesestr
}

// let res=reverseString("chimtu")
// console.log(res)

// write a function to reverse a number  
 function reverseNumber(str){
  let n=str.toString()
    console.log(n.length) //startpoint
  let revesestr="" //to store the reversed string
  for(let i=n.length-1;i>=0;i--){
     console.log(n[i])
     revesestr+=n[i]
  }
 return revesestr
}

let res1=reverseNumber(1234)
console.log(res1)

// write a function to reverse a number  using for loop without using toString method  
// write a function to count number vowels in a given string using the for loop 
// write a function to count number constants in a given string using the for loop 
// write a function to count number digits in a given number using the for loop 
// write a function to count even  digits in a given number using the for loop 
// write a function to print  sum even digits in a given number using the for loop 