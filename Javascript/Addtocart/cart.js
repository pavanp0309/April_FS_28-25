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
  cartItems=JSON.parse(localcartItems)
  handleCartUi()
 }
}
console.log(cartItems)

//  function to Update the  cart ui 
function handleCartUi(){
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
                        <button class="btn btn-danger increment-btn">-</button>
                        <span>${ele.quantity}</span>
                        <button class="btn btn-success decrement-btn">+</button>
                       </div>
                    </div>
                </div>`

    //  adding the cols to row dynamically (appending child elements)
     cartUiItem.appendChild(cartCol)
    })
}



// function to increment the items Quantity
// function to decrement the items Quantity
// function to delete  the single Products 
// function to calculate the cart Total
// function to to clear the Entire cart
