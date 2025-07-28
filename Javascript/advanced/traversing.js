let ele=document.querySelector("#child")
// console.log(ele)
// console.log(ele.parentElement)//div
// console.log(ele.parentElement.parentElement)//body
// console.log(ele.parentElement.parentElement.parentElement)//html
// console.log(ele.parentElement.parentElement.parentElement.parentElement)//null
// console.log(ele.parentElement.parentElement.parentElement.parentNode)//null

// console.log(ele.parentNode)
// console.log(ele.parentNode.parentNode.parentNode.parentNode)
// console.log(ele.parentNode.parentNode.parentNode.parentNode)

let ele3=document.querySelector("#parent")
// console.log(ele3)
// console.log(ele3.children)//HTMLCollection(3) [p, h2, h3#child, child: h3#child]
// console.log(ele3.childNodes)//HTMLCollection(3) [p, h2, h3#child, child: h3#child]

// console.log(ele3.firstChild)//#text
// console.log(ele3.firstElementChild)// <p>Hello-child-1</p>
// console.log(ele3.lastChild)// #text
// console.log(ele3.lastElementChild)// <h3 id="child">hello-child-3</h3>

// console.log(ele.previousSibling)//text
// console.log(ele.previousElementSibling)//h2
// console.log(ele.nextSibling)//text
// console.log(ele.nextElementSibling)//null

console.log(ele.parentElement.firstElementChild.nextElementSibling.parentElement.parentElement.parentElement.firstElementChild.lastElementChild.innerHTML="reached")