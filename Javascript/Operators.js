// 1.Arthematic Opertors 
//  + : addition
//  -:sub 
// * : multiplication
// / : division  : gives  Quotient
// % : modulo -division  - gives Remainder
// ** : exponential  (Power based values: 2^3-->2**3)
// Increment & decrement Operator 

// +  :addition operator
// + : in string--->concatination operator
// + : in conversion ---> unary plus operator
// ++ : increment operator 
// console.log(1+3) //4
// console.log(1+"3") // 13
// console.log(1+"3"+3) //133
// console.log(1+ +"3" +3) // 7

// console.log(1-2)//1 
// console.log(1-"2")//-1 
// console.log("1"-"2")//-1 

// console.log(1*4) // 4
// console.log("1"*4) // 4

// console.log(2/4) //0.5  ---Quotient
// console.log(2%4) //2 ---remainder

// console.log(2**2) // 2*2 ==4
// console.log(2**3) // 2*2*2 =8
// console.log(2**"5") // 32


// _________ Coding Problems________________

// INCREMENT AND DECREMENT OPERATORS 

// INCREMENT   : it will increment the Values by 1 everytime
    //  pre-Increment  : (++varibale_name) eg : ++a
    //  post increment : (varibale_name++)  eg : a++
//  DECREMENT it will decrement the Values by 1 everytime
    //  pre-decrement  : (--varibale_name) eg : --a
    //  post decrement : (varibale_name--)  eg : a--
    // let a=1
    // console.log(++a) //2 ( value be increment by and then prints it)
    // let b=1
    // console.log(b++) //1  (value be increment after it printed )
    // console.log(b)

    // let c=2
    // console.log(--c)//1( value be decrement by and then prints it)
    // let d=2
    // console.log(d--) //2 (value be decrement after that it printed )
    // console.log(d) //2 (value be decrement after that it printed )


    // let a=2  // 3-4
    // let b=3 // 4 5
    // let res=++a + b++ - a++ + a +b + ++b + b
    // // res = 3  + 3 -3 + 4 +4 +5 +5 ==21
    // console.log(res)


    // let c=3 //4 3 4 3 2
    // let d=5 //4 3 4 3
    // let res1=c++ - --c + --d + c++ - --c + d-- + ++ d  + --c + d-- +c
    // //  res =>3 - 3 + 4 + 3 - 3 + 4 +  4 + 2 + 4 + 2
    // console.log(res1)


    // let e=4
    // let f=6 
    // // let guess= e++ - --e + f +f-- - --f + e++ - --f + --e +e +f++  
    //         // ==> 4 -4 +6 +6 -4+4-3+4 +4+3
    // // answer: 20
    // let guess2= f++ + e-- + e*f + f++ - e-- + e-f + f++ + e-- * f++ 
            //   = 6 + 4 +21  +7 -3 +2 -8 +8 +18 ===> 55
    // console.log(guess2)//55

    // let r=8
    // let r2=7
    // let res=r*3 + r-- - r2 + r++ - --r2 - r2-- * r-- + ++r - r++ + r2* --r + r2*5
    //     //    = 8*3 +8 -7 +7 -6 -6 *8 +8 -8 +5 *8 +5*5
    //     //    =24 + 8 -6 -48 +40 +25 ===>43
    // console.log(res)

// write a function to caliculate area and parimeter of   traiangle
// write a function to caliculate the sum of first N natural 
// write a function to caliculate the sum of squares of first N Natural Numbers 
//  write a function to calculate the Product and sum ,remainder quotient of 2 number 
    //  case : 10 ,20  
    //  case2 : 6, 3
    // function Findvalue(a,b){
    //     console.log("sum",a+b)
    //     return {
    //         sum : a+b,
    //         prod: a*b ,
    //     }
    // }  

    // let res2=Findvalue(10,20)
    // console.log(res2)


// _________________________________COMPARISION OPERATORS ___________________
// eg :> < >= <= == === != 
// comaprision operators returns the True or false values 

// let age=10
// console.log(age>10) // false
// console.log(age>=10) // false
// console.log(age<=18) // false
// console.log(age<18) // false

// let userName="ravikuma"
// let userName1="ravikuma"

// console.log("equalto",userName=="ravikumar")
// console.log("equalto",userName1=="ravikuma")

// let role="admin"
// console.log(role=="trainer") //false

// let num="7995524942"
// console.log(num==7995524942)//true
// console.log(num===7995524942)//flase

// console.log(num!=7995524942) //false 

// even or not
// let num1=10
// console.log(num%2==0)
// console.log(num>0)
// console.log(num<0)


// Logical Operator 
//  and operator : &&  --> true && true--> true 
//  and operator : &&  --> true && false--> false

// OR opeator  : ||  ------> True || false -- true

// not  Operator : !   : !true ---false 
// let age=2
// let passport=true
// console.log(age>=18&& passport)
// console.log(age>=18 || passport)
// console.log(!passport) // toggling


//  SHORTCIRCUTING 
// let a=[]
// console.log(a.length)
// console.log(!!a.length&&true)
console.log(!!true)



// ASSIGNMENT OPERATORS 

// var a=10
// var b=12
// // b=b+a
// // console.log(b+=a) // b=b+a
// // console.log(b*=a) // b=b+a
// // console.log(b-=a) // b=b+a   
// console.log(b*=a) // b=b*a // 12*10


// TERNARY OPERATOR : SYNTATIC SUGAR OF ELSE CODITION 

// if(condition){
//     // these block excutes only when condition is True
// }else{
//     // these block of code excutes when condition is false
// }

// let res=(condition)?"Excutes only when codn is true":" comdition is false"
// let res1=(condition)?((condition)?"true":"false"):" comdition is false"


// let username=prompt("enter a value")
// if(username=="ravikumar"){
//     console.log("welcome to dashboard")
// }else{
//     console.log("GET OUT")
// }
// let res=(username=="ravikumar")?console.log("welcome to dashboard"):console.log("GET OUT")
// let res1=(username=="ravikumar")?"welcome to dashboard":"GET OUT"
// console.log(res1)
let num=10
let res2=(num>0)?"positive":"Negative"
let res3=(num%2==0)?"even":"odd"
// alert(res2)
// alert(res3)
let item="veg"
let menu="birayani-fry";
let select =(item=="veg")?((menu=="birayani")?"discount-50%":"10%"):"no-discount"
console.log(select)


function assign(age){
       
    return (age>18)?"adult":"minor"
}
let res=assign(10)
console.log(res)