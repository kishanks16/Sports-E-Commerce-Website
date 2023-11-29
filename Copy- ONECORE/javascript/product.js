const products=[
    {
        id : 100,
        image:'img/SS Ikon - 100.jpg',
        name:'SS Ikon Edition ',
        price:'1,491'
    },
    {   
        id : 101,
        image:'img/SS gladiator-kw-scaled -101.jpg',
        name:'SS Rayudu Edition ',
        price:'2,700'
    },
    {
        id : 102,
        image:'img/SS jadeja 102.jpg',
        name:'SS Jadeja Edition  ',
        price:'33,100'
    },
    {
        id : 103,
        image:'img/ton elite_ton - 103.jpg',
        name:'SS Ton Elite Edition',
        price:'11,340'
    },
    {
        id : 104,
        image:'img/ss master_9000 -104.jpg',
        name:'SS Master 9000',
        price:'7,700'
    },
    {
        id : 105,
        image:'img/ss slasher_ew_ton -105.jpg',
        name:'SS Slasher Ton',
        price:'2,999'
    },
    {
        id : 106,
        image:'img/NB DC 1280 -106.jpeg',
        name:'New Balance 1280',
        price:'49,949'
    },
    {
        id : 107,
        image:'img/NB TC 1260 -107.jpeg',
        name:'New Balance 1260',
        price:'36,300'
    },
    {
        id : 108,
        image:'img/MRF -108',
        name:'Virat Kohli Edition',
        price:'77,400'
    },
    {
        id : 109,
        image:'img/mrf-skipper-109',
        name:'MRF Gladiator',
        price:'13,045'
    },
    {
        id : 110,
        image:'img/dsc kashmir willow-110.jpg',
        name:'DSC Kashmir Willow',
        price:'3,500'
    },
    {
        id : 111,
        image:'img/warner -111.jpg',
        name:'DSC Warner Edition',
        price:'37,500'
    },
    {
        id : 112,
        image:'img/DSC xlite-1.0-english-willow 112.jpg',
        name:'DSC Xlite 9599',
        price:'5,999'
    },
    {
        id : 113,
        image:'img/grey nicolls -113',
        name:'Grey Nicolls Gutsy',
        price:'22,400'
    },
    {
        id : 114,
        image:'img/Babar grey nicolls -114',
        name:'Babar Azam Edition',
        price:'40,700'
    },
    {
        id : 115,
        image:'img/brook grey nicolls -115',
        name:'HarryBrook Edition',
        price:'77,377'
    }
];

let productsHTML ='';

products.forEach((product) => {
    productsHTML +=
    `<div class="card">
        <div class="image-con">
            <img src="${product.image}" class="img-product" alt="no">
        </div>
        <div class="product-name">
            ${product.name}
        </div>
    
        <div class="PriceQuantity">
            <div class="product-price">
                ₹${product.price}
            </div>
            <div class="quantityContainer">
                <select>
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
        </div>
    
        <div class="addToCart">
            <button type="button" class="acart" data-product-id="${product.id}">Add to Basket</button>
        </div>
    </div>`
});


document.querySelector('.card-js').innerHTML = productsHTML;

document.querySelectorAll('.acart').
    forEach((button)=>{
        button.addEventListener('click',()=>{
            const productId = button.dataset.productId;
            let matchingItem;

            cart.forEach((item) =>{
                if(productId === item.productId) {
                    matchingItem = item
                }
            })

            if(matchingItem){
                matchingItem.quantity += 1;
            }else{
                cart.push({
                    productId : productId,
                    quantity : 1
                })
            }

            let cartQuantity = 0;
            cart.forEach((item)=>{
                cartQuantity = cartQuantity + item.quantity;
            })

            document.querySelector('.cartItems').innerHTML = cartQuantity;

        })
    })