function HandleClick(){
    alert("mouse is clikced")
}

// adding through dom attribues
let btn=document.getElementById("id1")
// console.log(btn.onclick)
// btn.onclick=HandleClick
// btn.onclick=function(){
//     alert("mouse is clikced second way")
// }

// btn.onclick=function(){
//     alert("mouse is clikced second way-secondtime")
// }


// third way 
// addEventListener
// btn.addEventListener("click",HandleClick)
// btn.addEventListener("click",()=>{
//     alert("third way")
// })

// let todos=document.getElementById("todo")
// todos.addEventListener("click",(event)=>{
//     // console.log(event.target.style.display="none")
//     console.log(event.target.classList.toggle("c1"))
// })

// let searchbar=document.getElementById("search")
// let typing=document.getElementById("result")
// // console.log(searchbar)
// // searchbar.addEventListener("keypress",(e)=>{
// // //    console.log(e.shiftKey)
// // console.log(e)
// // //    typing.textContent=e.key
// //     console.log(e.code)

// //    if(e.shiftKey&&e.key){
// //     typing.textContent=e.key.toUpperCase()
// //    }
// // //    if(e.key=="Enter"){
// // //     alert("logged in sccessfully")
// // //    }
// // })

// document.addEventListener("DOMContentLoaded",()=>{
//     console.log("loaded successfully")
// })
// document.addEventListener("resize",(e)=>{
//     console.log("loaded successfully",e)
    
// })


// event Propagation
let Parent=document.querySelector(".parent") 
let child=document.querySelector(".child") 
let btn1=document.querySelector(".btn1") 
let btn2=document.querySelector(".btn2") 

window.addEventListener("click",(e)=>{
    // e.stopPropagation()
    e.stopImmediatePropagation()
    console.log("window is clicked")
},{capture:true})
window.addEventListener("click",(e)=>{
    // e.stopPropagation()
    console.log("window is clicked")
},{capture:true})
Parent.addEventListener("click",()=>{
    console.log("parent is clicked")
},true)
child.addEventListener("click",()=>{
    console.log("child is clicked")
})
btn1.addEventListener("click",()=>{
    console.log("btn1 is clicked")
})
btn2.addEventListener("click",()=>{
    console.log("btn2 is clicked")
})
