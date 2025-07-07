// if-statement
// operator that we commony/mostly use in  comparision(> < >==,<== === == !==) logical operators  (&&,|| ,!)
// syntax
// if(condition){
// //   these block of code will excute only when condition is true
// }

// if(true){
//     console.log("this block of code exutes")
// }

// let age=18
// if(age>=18){
//     console.log("eligible for vote")
// }

// let password="1234"
// if(password=="1234"){
//     console.log("welcome admin")
// }

// let password1="1234"
// let userName="pavanR"
// if(userName=="pavan" && password1=="1234"){
//     console.log("welcome admin")
// }

function voteEligibility(age) {
  console.log("checking Vote Eligibility", age);
  if (age > 18) {
    console.log("eligible");
  } else {
    console.log("not eligible");
  }
}
// voteEligibility(17)
// voteEligibility(20)

// syntax: if -else

// if(condition){
//     // these block of code will excute only when condition is true
// }else{
//     // these block of code will exute when condition is false
// }

// let num=10
// if(num%2==0){
//  console.log("even number")
// }else{
//  console.log("odd number")
// }

// Reuseable Way
function everorOdd(num) {
  if (num % 2 == 0) {
    console.log("even number");
  } else {
    console.log("odd number");
  }
}

// calling the function
// everorOdd(10)
// everorOdd(5)

// function everorOddanddiv5(num) {
//     debugger
//   if (num % 2 == 0 ) {
//      if(num%5==0){
//        console.log("divisible by 5 and even")
//      }else{
//         console.log("even number but not divisible 5")
//      }
//   } else {
//     console.log("odd number");
//   }
// }

// // calling the function
//  everorOddanddiv5(10)
//  everorOddanddiv5(4)
//  everorOddanddiv5(3)

// syntax:else if ladder
// if(condition1){
// //   these block of code will excute only when condition1 true
// }else if(condition2){
// //  these block of code will excute only when condition2 true
// }else if(condition3){
// // these block of code will excute only when condition3 true
// }else{
// //   these block of code will excute when all the above conditions are false
// }

function GradeCal(marks) {
  let grade;
  let rank;
  let message;
  if (marks >= 90) {
    grade = "A";
    rank = 1;
    message = "Excellent";
  } else if (marks >= 60 && marks < 90) {
    grade = "b";
    rank = 2;
    message = "Good";
  } else if (marks >= 40 && marks < 60) {
    grade = "c";
    rank = 3;
    message = "avg";
  } else {
    grade = "fail";
    rank = 0;
    message = "need to improve";
  }
  return {
    r: rank,
    g: grade,
    m: message,
  };
}
// let res=GradeCal(50)
// console.log("results",res)
// console.log("results",`rank: ${res.r} grade :${res.g}`)

let marks = 50;
let grade;
let rank;
let message;
if (marks >= 90) {
  grade = "A";
  rank = 1;
  message = "Excellent";
} else if (marks >= 60 && marks < 90) {
  grade = "b";
  rank = 2;
  message = "Good";
} else if (marks >= 40 && marks < 60) {
  grade = "c";
  rank = 3;
  message = "avg";
} else {
  grade = "fail";
  rank = 0;
  message = "need to improve";
}
console.log(`rank: ${rank} grade :${grade} message:${message}`);

// switch _case statement
// syntax:
// switch (expression) {
//   case condition1:
//     // code block to be executed if condition1 is true
//     break;
//   case condition2:
//     // code block to be executed if condition2 is true
//     break;
//   case condition3:
//     // code block to be executed if condition3 is true
//     break;
//   case condition4:
//     // code block to be executed if condition4 is true
//     break;
// default:
//     break;
// }

function SelectMenu(menu) {
  switch (menu) {
    case "veg":
      console.log("choosen veg items");
      break;
    case "non-veg":
      console.log("choosen non-veg items");
      break;
    default:
      console.log("please select an item");
      break;
  }
}

// SelectMenu("non-veg");
// SelectMenu("veg");
// SelectMenu("v");

//  SelectMenu("veg");

1.
// let user=prompt("enter a vowels or consonant")
// console.log("user input",user.toLowerCase())
// 1.write a function to check whether the user input is vowel or consonant only if-else statement

// vowels="aeiou"
function CheckVowels(userInput){
    userInput=userInput.toLowerCase();
   if(typeof(userInput)=="string"){
    if(userInput=="a" || userInput=="e" ||userInput=="i" ||userInput=="o" ||userInput=="u"){
     console.log("its is a vowel")
    } else{
        console.log("its is a consonant")
    }
   }else{
    console.log(("please enter a valid input"))
   }


}
CheckVowels("A")
CheckVowels("6")
CheckVowels("")

// check greatest among three number 
// check whether given year is leap year or not 
//  rules  
//   if divide by 4 --> leap year 
//   if divide by 100 > not leap year  (leap year only when divide by 400)
// fizzbuzz
//   if divide by 3 print fizz and divide by 5 print buzz and divide by both print fizzbuzz else print number 

