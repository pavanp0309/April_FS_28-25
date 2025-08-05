// step1:function to load all The Products 
document.addEventListener("DOMContentLoaded",()=>{
    //🤸‍♀️🤸‍♂️step2: accessing all button elements to as browser loaded
    let addtocartBtn=document.querySelectorAll(".add-to-cart")
    console.log("aBtn",addtocartBtn)
    // 🛴🛵cartIcon🛴🛵
    let carticonbtn=document.querySelector(".cart-btn")
    // 👨‍🦰👶step3:acccessing each button individually to apply functionalities
    addtocartBtn.forEach(button=>{
        console.log("atcbtn",button)
        //🚲🛹step4: adding button functionalities and acccessing the parent information
        button.addEventListener("click",(e)=>{
            console.log(e.target.parentElement.parentElement)
            let productinfo=e.target.parentElement.parentElement // product
            let pimgUrl=productinfo.querySelector(".product-img").src
            let ptitle=productinfo.querySelector(".product-title").innerText
            let pdes=productinfo.querySelector(".product-description").innerText
            let pprice=productinfo.querySelector(".product-price").innerText
            // creating the Object for selected products
            let product={
            imgUrl:pimgUrl,
            title:ptitle,
            price:pprice,
            description:pdes,
            quantity:1
        }
        console.log("pinfo:",product)
        // passing the entire product information to addtocart function
        addtocart(product)

        })
       
    })

    //🚡🚀handling the cart_icon click🚡🚀
    carticonbtn.addEventListener("click",()=>{
       window.location.href="cart.html"
    })
})

// cartvalue
let cartItems=[]

// function to add items to cart
function addtocart(product){
  console.log("atcf",product)
      let existingItems=cartItems.find(item=>item.title == product.title)
       console.log(existingItems)
      if(existingItems){
        existingItems.quantity++
      }else{
        cartItems.push(product)
      }
    // adding items to local_storage once after user click addtocart
    localStorage.setItem("cart",JSON.stringify(cartItems))
    handleCartIconVal()
}
console.log(cartItems)
// function to increment cart icon_total
function handleCartIconVal(){
   let cartIcon=document.querySelector("#cart-val")
   let cartVal=cartItems.reduce((total,ele)=>total+ele.quantity,0)
   cartIcon.innerHTML=cartVal
   console.log(cartVal)
}
// function to loadthe cart 
function loadCart(){
 let localcartItems=localStorage.getItem("cart")
//  it loads the cart Icon values when if items exist in db-storage and parse it
 if(localcartItems){
  cartItems=JSON.parse(localcartItems)
  handleCartIconVal()
 }
}
loadCart()



