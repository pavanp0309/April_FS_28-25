// load all the Items from the localstorage as soon as document loaded
document.addEventListener("DOMContentLoaded",()=>{
    // loadcart function gets called as soon as dom (html) is  loaded
loadCart()
})

// array to store cart items
let cartItems=[]


function loadCart(){
 let localcartItems=localStorage.getItem("cart")
//  it loads the cart Icon values when if items exist in db-storage and parse it
 if(localcartItems){
  cartItems=JSON.parse(localcartItems)// coverts string to original format (object)
  handleCartUi()
  handleCartIconVal()
 }
}
console.log(cartItems)

//  function to Update the  cart ui 
function handleCartUi(){
    // accessing the Html form cart.html
    let cartUiItem=document.querySelector("#cart") // row
    console.log(cartUiItem)
    cartUiItem.innerHTML=''

    cartItems.forEach(ele=>{
    //    creating the dynamic columns and cards
     let cartCol=document.createElement("div")
     cartCol.className="col-sm-12 col-md-3 col-lg-3"
     cartCol.innerHTML=` <div class="card product">
                    <img src=${ele.imgUrl} class="card-img-top product-img" alt="...">
                    <div class="card-body product-info">
                        <h5 class="card-title product-title">${ele.title}</h5>
                        <p class="card-text product-description">${ele.description}</p>
                        <p class="card-text product-price">${ele.price}</p>
                        <div class="quantity-container">
                        <button class="btn btn-danger increment-btn">+</button>
                        <span class="quantity">${ele.quantity}</span>
                        <button class="btn btn-success decrement-btn">-</button>
                        <button class="btn btn-success ms-3 delete-btn">delete</button>
                       </div>
                    </div>
                </div>`

    
    // adding functionalites to increment decrement delete
    let IncreBtn=cartCol.querySelector(".increment-btn")
    let DecreBtn=cartCol.querySelector(".decrement-btn")
    let DeleteBtn=cartCol.querySelector(".delete-btn")
    let quantity=cartCol.querySelector(".quantity")

    // adding events to the buttons
    IncreBtn.addEventListener("click",()=>{
        console.log("incrementing")
        incrementQty(quantity,ele) //calls increment function and excutes the logic inside it 
    })
    
     DecreBtn.addEventListener("click",()=>{
        console.log("incrementing")
        decrementQty(quantity,ele) //calls decrement function and excutes the logic inside it 
    })

    DeleteBtn.addEventListener("click",()=>{
        console.log("incrementing")
        deleteItem(ele) //calls deletefunction and excutes the logic inside it 
    })


//  adding the cols to row dynamically (appending child elements)
     cartUiItem.appendChild(cartCol)
    })

    handleCartIconVal()
}



// function to increment the items Quantity
function incrementQty(quantity,ele){
    console.log(quantity)
   quantity.textContent=ele.quantity++
   localStorage.setItem("cart",JSON.stringify(cartItems))
   handleCartUi()
}
// function to decrement the items Quantity
function decrementQty(quantity,ele){
    console.log(quantity)
    console.log(ele)
    if(ele.quantity>1){
     quantity.textContent=ele.quantity--
    localStorage.setItem("cart",JSON.stringify(cartItems))
    }
    handleCartUi()
}

// function to delete  the single Products 
function deleteItem(ele){
    cartItems=cartItems.filter(item=>item.title !== ele.title)
    localStorage.setItem("cart",JSON.stringify(cartItems))
    handleCartUi()
}
// function to calculate the carticon Total
function handleCartIconVal(){
   let cartIcon=document.querySelectorAll("#cart-val")
   let cartVal=cartItems.reduce((total,ele)=>total+ele.quantity,0)
   cartIcon.forEach((ele)=>{
       ele.innerHTML=cartVal
   })
   console.log(cartVal)
}


function handleCartIconVal(){
   let carttotal=document.querySelector("#cart_total")
   let cartVal=cartItems.reduce((total,ele)=>total+ele.quantity*ele.price,0)
   carttotal.textContent=cartVal
}
// function to to clear the Entire cart
