// immutability
// let str="hello"
// console.log(str)// hello
// console.log(str[0]) //h
// str[0]="b"
// console.log(str)// hello
// // mutability
// let str1=["hello","bye"]
// console.log(str1)// ['hello', 'bye']
// console.log(str1[0]) //hello
// str1[0]="b"
// console.log(str1)// hello

// Differnt ways to create the Strings 
// 1.using the string literals   ---->primitive
        //  1.using single Quotes
        //  2.using double Quotes
        //  3.using template literals
//  2. using the string Global keyword ---primitive
// 3. using the new keyword ---non-primitive

// let data='hello'
// let data1="ravi"
// let data2=`hello` // template literals
// console.log(typeof data) //string
// console.log(typeof data1) //string
// console.log(typeof data2) //string

// problem-1
// let dataprob='hello\'s'
// let dataprob1="hello's"
// console.log(dataprob)
// console.log(dataprob1)

// problem-2
// let dprob="hello \n ravi kumar"
// console.log(dprob)

// problem-3
// let a="hello" + " " +" " + data1 +" "+ "hello"
// console.log(a)


// // one solution 
// let gangleader=`he's 
// kdsjfhdb
// ${data1} bye`
// console.log(gangleader)


// let str2=String("Fs")
// console.log(str2)
// console.log(typeof str2) //string :primitive

// let str3=new String("Fs")
// console.log(str3)
// console.log(typeof str3) //object 

// let example =new String("pav")
// console.log(example.toUpperCase())
// console.log(example)


// let e="hello".toUpperCase()
// // TRIM

// // let c="hello"
// // c="m"
// // console.log(c)
// let n={
//     name:"srinvas"
// }
// console.log(n)
// n.name="ravikumar"
// console.log(n)




// Properties and Methods 

// // length 
// let st1=" python "
// console.log(st1)
// console.log(st1.length)//8 (space is also considered as character)

// // substring 
// let st2="java developer"

// // Methods 
// // slice(start?: number, end?: number): string
// // syntax: slice(startindex,endindex)
// //  startindex: we telling which index or poistion we need to extract

// let str3="python fullstack developer"
// // p:0 y:1 t:2 h:3 0:4 :n:5
// // console.log(str3.length)//26
// // console.log(str3.slice()) //extracts the entire strings
// // console.log(str3.slice(1)) //ython fullstack developer : extracts from start position
// // console.log(str3.slice(1,6)) //ython
// // console.log(str3.slice(-1,))// r
// // console.log(str3.slice(-4))// 26-4=22
// // console.log(str3.slice(-1,-2))// startindex>endindex==empty
// // console.log(str3.slice(3,2))// startindex>endindex==empty

// // let str4="hii"
// // // h:0 i:1 i:2
// // console.log(str4.length) //3
// // console.log(str4.slice(-2)) //3-2==1
// // console.log(str4.slice(-3,-2)) //3-3==0  3-2==1 slice(0,1)==>h
// // console.log(str4.slice(4)) //empty

// let str5="hello friend"
// // h:0 e:1 l :2 l:3 0:4  :5 f:6 r:7
// console.log(str5)
// console.log(str5.length)
// console.log(str5.substring())//extracts entire strings
// console.log(str5.substring(2))//llo friend
// console.log(str5.substring(1,4))//llo friend (extracts upto the previous index)
// console.log(str5.substring(4,2))//swaps the values when start is greater than end value
// console.log(str5.substring(-2))//negative values are treated zero

// // split method converts strings into array of substrings 
// // console.log(str5.split()) // strings will mutable (as its an array)

// console.log(str5.split(""))//['h', 'e', 'l', 'l', 'o', ' ', 'f', 'r', 'i', 'e', 'n', 'd']
// console.log(str5.split("",5))//['h', 'e', 'l', 'l', 'o', ' ', 'f', 'r', 'i', 'e', 'n', 'd']
// console.log(str5.split(" "))// ['hello', 'friend']
// console.log(str5.split(" ",1))//['hello']
// console.log(str5.split(" "))//['hello']
// // console.log(str5.split("").reverse().slice(0,5).join())

// // trim trimStart trimEnd
// // trime:is used for removing the white space form the string from both start and end
// // trimStart:is used for removing the white space form the start
// // trimEnd:is used for removing the white space form the end

// let data="                    myuser007                "
// // console.log(data.length)
// // console.log(data.trimEnd())
// // console.log(data.trimStart())
// // console.log(data)
// console.log(data.trim())
// // let r=data.trimEnd()
// // console.log(r.length)


// padStart(maxLength: number, fillString?: string):
// let account="1666"
// console.log(account.padStart(10,"*"))
// console.log(account.padEnd(10,"*"))


// indexof
// indexOf(searchString: string, position?: number): number 
// let findme="i a am dev am k"
// console.log(findme.indexOf())// -1
// console.log(findme.indexOf("py"))// -1 (if no substring is found)
// console.log(findme.indexOf("am")) //4
// console.log(findme.indexOf("am")) //4
// // console.log(findme.indexOf("am",5)) //4


// console.log(findme.lastIndexOf("am")) //4
// console.log(findme.lastIndexOf("am",4)) //4


// startWith 
// startsWith(searchString: string, position?: number):boolean
// let url='https://web.whatsapp.com'
// console.log(url.startsWith("https"))
// console.log(url.startsWith("https",4))
// console.log(url.endsWith(".com"))

// replace and replaceAll 
// String.replace(searchValue: string | RegExp, replaceValue: string): string
// let names="Python java python "
// let names1="python java python "
// console.log(names.replace()) //python java python 
// console.log(names.replace("python","java")) //python java python 
// console.log(names.replace(/python/i,"java")) //python java python 
// console.log(names.replace(/python/ig,"java")) //python java python 
// console.log(names.replace()) //python java python 
// console.log(names.replace("python","java")) //python java python 
// console.log(names.replace(/python/i,"java")) //python java python 
// console.log(names.replace(/python/ig,"java")) //python java python 
// console.log(names1.replaceAll("python","java")) //python java python 
// console.log(names1.replace("python","java")) //python java python 
// console.log(names.replaceAll(/python/,"java")) //python java python 


// const data="i am java dev with dev knowledge"
// console.log(data.matchAll("dev").next())




let mobile="Iphone max"
let mobileprice="1900"
console.log(mobile.toUpperCase().includes("IPHONE"))

let res=mobile.concat(mobileprice)
console.log(res)

console.log(mobile.search("max"))


// search methods
// indexof()
// Lastindexof()
// includes()
// search()
// match()
// matchAll()
// chart()
// chartcodeAt()

// let a="abc"
// console.log(a.charAt(1))
// console.log(a.charCodeAt(0))