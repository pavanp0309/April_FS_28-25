// to create an html ELement
// let divele=document.createElement("div")
// console.log(divele)



// // to create the Text Node
// let textele=document.createTextNode("dom manipulation")
// console.log(textele)

// // appending the child
// divele.appendChild(textele)
// document.body.appendChild(divele)

// let examp=document.querySelector(".example")
// console.log(examp.textContent)
// textContent 
// innerText
// innerHtml 

// function addtocart(){

// //   creating the  elements for the card
// let divele=document.createElement("div")
// let img=document.createElement("img")
// let btn=document.createElement("button")
// let pele=document.createElement("p")
// let pele1=document.createElement("p")
// let icon=document.createElement("i")
// let pele3=document.createElement("p")
// console.log(divele)
// console.log(img)
// console.log(btn)
// console.log(pele)
// console.log(pele1)
// console.log(pele3)
// console.log(icon)

// // to create the comment 
// let data=document.createComment("cart items")

// // 1st way
// let text=document.createTextNode("scotch-brite silver sparks")
// console.log(text)
// pele.appendChild(text)

// // 2nd way
// pele1.textContent="pack of 6"
// pele3.innerText="$96"
// btn.innerText="addtocart"



// // dom attributes(creating attributes)
// divele.setAttribute("id","card")
// img.setAttribute("src","www.img.com")
// img.setAttribute("alt","www.img.com")
// // to check attributes and get its value
// console.log(divele.hasAttribute("class"))//false
// console.log(divele.getAttribute("class"))//null
// // to remove attribute
// // console.log(divele.removeAttribute("id"))
// // to add class attribute
// divele.className="c1"
// // divele.classList.add("c2")
// // divele.classList.remove("c2")
// divele.classList.toggle("c1")

// icon.className="bi bi-whatsapp"


// // appending the child
// // appendChild will add an element to last
// divele.appendChild(img)
// divele.appendChild(pele)
// divele.appendChild(pele1)
// divele.appendChild(icon)
// divele.appendChild(pele3)
// divele.appendChild(btn)


// document.body.appendChild(data)
// document.body.appendChild(divele)





// }


// let list=document.querySelector("#list")

// function sample(){
//     // creating the element
//     let li=document.createElement("li")
//     li.innerText="Guest😎"
//     li.style.color="red"

//     // list.appendChild(li) // will add only element Nodes
//     // list.appendChild("guest😂")
//     list.append(li)
//     // list.append("guest😂")
//     // list.prepend(li)
//     // list.prepend("guest")
//     //  list.insertBefore(newnode,oldelementposition)
//     // list.insertBefore(li,list.firstElementChild.nextElementSibling)
//     // list.insertBefore(li,list.lastElementChild)
//     list.insertAdjacentHTML("beforebegin",'<h1>before begin</h1>')
//     list.insertAdjacentHTML("afterbegin",'<h1>aftre begin</h1>')
//     list.insertAdjacentHTML("afterend",'<h1>aftre end</h1>')
//     list.insertAdjacentHTML("beforeend",'<h1>before end</h1>')
// }

// DocumentFragment()

// let docparent=document.createDocumentFragment()
// console.log(docparent)
// let list=document.querySelector("#list")

// let liele=document.createElement("li")
// liele.innerText="hello"
// // docparent.appendChild(liele)
// console.log(liele)
// let c1= document.cloneNode(liele)
// console.log(c1)
 let list=document.querySelector("#list")
 function sample(){
    list.classList.toggle("c1")
   console.log( list.setAttribute("style","color:red"))
 }