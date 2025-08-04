// step1:function to load all The Products 
document.addEventListener("DOMContentLoaded",()=>{
    //🤸‍♀️🤸‍♂️step2: accessing all button elements to as browser loaded
    let addtocartBtn=document.querySelectorAll(".add-to-cart")
    console.log("aBtn",addtocartBtn)
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
})

// cartvalue
let cartItems=[]

// function to add items to cart
function addtocart(product){
      let existingItems=cartItems.find(item=>item.title == product.title)
       console.log(existingItems)
      if(existingItems){
        existingItems.quantity++
      }else{
        cartItems.push(product)
      }
}
console.log(cartItems)
// function to increment cart icon_total
// function to loadthe cart 


// function to Update the  cart ui 
// function to increment the items Quantity
// function to decrement the items Quantity
// function to delete  the single Products 
// function to calculate the cart Total
// function to to clear the Entire cart
