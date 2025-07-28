
// getElementById method will access only the first element that matches in the document 
// let h1elem=document.getElementById("id1")
// console.log(h1elem)

// // applying styles
// h1elem.style.backgroundColor="red"
// h1elem.style.border=" 2px solid green"
// h1elem.style.padding=" 10px"
// h1elem.style.textAlign="center"

// // changing the text
// console.log(h1elem.innerText)
// console.log(h1elem.innerHTML)

// // difference 
// h1elem.innerText="<span  style='color:rgb(0, 13, 255);'>changed</span>" //html elemnets are treated text ,cant apply style
// h1elem.innerHTML="<span style='color:rgb(0, 13, 255);'>changed</span>" //html elemnets are treated html elements,can apply styles

// // getElementByClassName
// let clasEle=document.getElementsByClassName("c1")
// console.log(clasEle)// array html collection of values HTMLCollection(3) [p.c1, p.c1, p.c1]

// change the styles 
// clasEle.style.color="red" //Uncaught TypeError: Cannot set properties of undefined (setting 'color')
// clasEle[0].style.color="red"
// clasEle[1].style.color="red"
// clasEle[2].style.color="green"

// for(let i=0;i<clasEle.length;i++){
//     clasEle[i].style.backgroundColor="gold"
//     clasEle[i].style.textAlign="center"
// }


// let tag=document.getElementsByTagName("h2")
// console.log(tag)//html collection values HTMLCollection(8) [h2, h2, h2, h2, h2, h2, h2, h2]

// applying styles 
// tag[0].style.color="blue"
// tag[1].style.color="red"
// tag[2].style.color="green"
// tag[3].style.color="green"
// tag[4].style.color="green"

// for(let i=0;i<tag.length;i++){
//     tag[i].style.backgroundColor="pink"
//     tag[i].style.textAlign="center"
// }




// let QueryEle=document.querySelector("#id1")
// console.log(QueryEle) //  <h1 id="id1">Hello welcome To Javascript dom-1</h1>

// let QueryEle1=document.querySelector(".c1")
// console.log(QueryEle1) // <p class="c1">Hello i am dev with class</p>


// let QueryEle2=document.querySelector("h2")
// console.log(QueryEle2) // <h2>Hello i am js dev with a tag</h2>


// let QueryAll=document.querySelectorAll("#id1")
// // console.log(QueryAll) //NodeList(2) [h1#id1, h1#id1]
// let QueryAll1=document.querySelectorAll(".c1")
// console.log(QueryAll1) //NodeList(3) [p.c1, p.c1, p.c1]
// let QueryAll2=document.querySelectorAll("h2")
// console.log(QueryAll2) //NodeList(8) [h2, h2, h2, h2, h2, h2, h2, h2]

// QueryAll2[1].style.color="green"
// QueryAll2[1].style.fontSize="3rem"

// for(let i=0;i<QueryAll2.length;i++){
//     QueryAll2[i].style.backgroundColor="pink"
//     QueryAll2[i].style.textAlign="center"
// }

// QueryAll2.forEach(ele=>ele.style.backgroundColor="pink")

let QueryAll3=document.querySelectorAll("h2,#id1,.c1")
console.log(QueryAll3)