
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
//  function reverseNumber(str){
//   let n=str.toString()
//     console.log(n.length) //startpoint
//   let revesestr="" //to store the reversed string
//   for(let i=n.length-1;i>=0;i--){
//      console.log(n[i])
//      revesestr+=n[i]
//   }
//  return revesestr
// }

// let res1=reverseNumber(1234)
// console.log(res1)

// write a function to reverse a number  using for loop without using toString method  
// write a function to count number vowels in a given string using the for loop 
// write a function to count number constants in a given string using the for loop 
// write a function to count number digits in a given number using the for loop 
// write a function to count even  digits in a given number using the for loop 
// write a function to print  sum even digits in a given number using the for loop 


// 1.what are natural numbers  
//     def:
//  alogorithem steps   to write the code :
//  usage 
//      application 

//   what are whole numbers
// 2.what are composite numbers 
// 3.what are integers 
// 4.what are factors
// 5.what are divisors and remainder and how to get those remainders and divisors
// 6.what are prime numbers
// 7.what is gcd /hcf
// 8.what is lcm 
// 9 how to print the square and cubes of a numbers (steps for it)
// 10 what is  amstrong number
// 11 what is  strong number
// 12 what is  perfect number
// 13.how get last degits and how to remove last degits
// 14.what is palindrome
// 15 how to reverse a number 


// tell how to extract the digits form a number 
// num=121--->how to extract one by digit  num%10--(remainder)
// tell how to remove the digits form a number num/10--Quotient
// while loop
// natural number all positive number(countable number) upto number ,no negative nofraction no decimal

// To reverse a number 
// eg: 123---321

// algorithm
//  step1: take a number n
//  step2: initilize a variable rev =0
//  step3: write while num>0 perform 
//        extract the last degit digit=n%10
//        add it to rev varaible rev=rev*10+digit
//        remove the last digit from a number n/10
// step:print the rev 

// function reverseNumber(num){//original num=123
//   let rev=0;
//   while(num>0){
//     let digit=num%10
//     console.log(digit)
//     rev=rev*10+digit // 0*10+3=3
//     console.log("rev",rev)
//     num=Math.floor(num/10) // these modifies original number
//     console.log("num",num)
//   }
//   return rev 

// }
// reverseNumber(123)// natural number
// reverseNumber(0)// natural number
// reverseNumber(-123)// natural number

// 121--->121

function palindrome(num){//original num=123
  if(num<0) return false
  if(num>0 && num<10) return true 
  let original=num
  let rev=0;
  while(num>0){
    let digit=num%10
    console.log(digit)
    rev=rev*10+digit // 0*10+3=3
    console.log("rev",rev)
    num=Math.floor(num/10) // these modifies original number
    console.log("num",num)
  }
  return original===rev

}

// 121==121--palindrome 
//-121==121--->not palindrome
// 3
// 0
 

// Amstrong number /
// 1234=4digits --power value
  //  1^4+2^4+3^4+4^4==1234

  //  alogorithem 
  //  step1: take a number n
  //  step2:count the Number of digitis using the while loop 
  //  step3:calculate the power of each digit 
  //  step4:total the power of each digit 
  //  step5:check the total sum of digits is equal to original number

  // write a code for counting number of digits from given number 

  // algorithem
  //  step1: take a number 
  //  step2: initialize count varaible eg:count=0
  //  step3:take while loop perform the action 
  //        extract the last from given number : num%10
  //        increment the count variable count ++
  //       remove the last from given number : num=num/10
  //   step4: repeat untill condition fails 
  //   step5: print the count 

// code: 
function CountNumberDigits(num){
  if(num===0) return 1 
  num=Math.abs(num)// removes the negative values in numbers
  let count=0
  while(num>0){
    // let digit=num%10 //extracts the last digits(not required)
    count++
    num=Math.floor(num/10) // removes the last digit from  a number
  }
  return count 
} 

console.log(CountNumberDigits(2))
console.log(CountNumberDigits(223456))


// write a code to calculate the sum of digits
function sumofDigits(num){
  if(num===0) return 1 
  num=Math.abs(num)// removes the negative values in numbers
  let sum=0
  while(num>0){
    let digit=num%10 //extracts the last digits(not required)
    sum+=digit
    num=Math.floor(num/10) // removes the last digit from  a number
  }
  return sum
} 

// write a code to calculate the product of digits

function productofDigits(num){
  if(num===0) return 1 
  num=Math.abs(num)// removes the negative values in numbers
  let product=1
  while(num>0){
    let digit=num%10 //extracts the last digits(not required)
    product*=digit // product=product*digit
    num=Math.floor(num/10) // removes the last digit from  a number
  }
  return product
} 

// Amstrong Number 

function Amstrong(num){
  let original=num
  let digits=CountNumberDigits(num)
  let sum=0

  while(num>0){
    let digit=num%10 
    sum+=digit**digits
    num=Math.floor(num/10)
  }

  return  original==sum

}
let data=Amstrong(123)
console.log(data)