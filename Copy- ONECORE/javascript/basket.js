
let cartsummaryHTML = '';



document.querySelector('.basketContanier').innerHTML = cartsummaryHTML;


let matchingProduct;

cart.forEach((cartItem) =>{
    const productId = cartItem.productId;

   
    products.forEach((product) =>{
        if(product.id === productId){
            matchingProduct = product;
        }
})



cartsummaryHTML +=
    `<div class="basketItems">
        <div class="basketImage">
            <img class="basketImg" src="no" alt="no">
        </div>

        <div class="basketContent">
            <div class="itemName">
            hello
            </div>
            <div class="itemQuantity">
                Quantity : 2
            </div>
            <div class="itemPrice">
                Total : ₹ 2000
            </div>
        </div>

        <div class="Modify">
            <button type="button" class="modifyBtn1">Modify</button> 
            <button type="button" class="modifyBtn2">Remove</button>
        </div>
    </div>
    `;

})
