const productlist =[]
productlist.push({
    name: 'celular xiomi poco x3'
    ,price: 120,
    img :'https://www.corning.com/content/dam/corning/microsites/csm/gorillaglass/POCO/CGG_poco-x3-pro.jpg'
    ,desc:'blalblalblalblalblalblalblalblsl'

})

productlist.push({
    name: 'computador'
    ,price: 500,
    img :'https://exitocol.vtexassets.com/arquivos/ids/5347301-800-auto?v=637438626358370000&width=800&height=auto&aspect=true',desc:'blalblalblalblalblalblalblalblsl'

})

productlist.push({
    name: 'consola de videojuegos nintendo switch lite'
    ,price: 600,
    img :'https://www.jxrultrastore.com/wp-content/uploads/2022/10/Nintendo-Switch-Lite-Amarilla-JxR.jpg',desc:'blalblalblalblalblalblalblalblsl'

})
const menuemail= document.querySelector('.navbar-email')
const desktomenu=document.querySelector('.desktop-menu')
const menuhamicon=document.querySelector('.menu')
const menucarritoicon=document.querySelector('.navbar-shopping-cart')
const productinfoaside=document.querySelector('.product-info-aside')
const productdetailcloseicon=document.querySelector('.product-detail-close')
const mobilemenu=document.querySelector('.mobile-menu')
const shoppingcartcontainer=document.querySelector('#shoppingcartcontainer')
const cardscontainer=document.querySelector('.cards-container')
const productdetailcontainer=document.querySelector('.product-detail-aside')
const countShoppingCart = document.querySelector(".navbar-shopping-cart div");
const totalAmount = document.querySelector(".total-amount");
const arrowClose = document.querySelector(".title-container img");
const productDetail = document.querySelector(".product-detail")
const buttonarr=[]
const arrayProductCart =[];
menuemail.addEventListener('click',toggledesktopmenu)
menuhamicon.addEventListener('click',togglemobilemenu)
menucarritoicon.addEventListener('click',togglecarritomenu)
productdetailcloseicon.addEventListener('click', closeproductdetail)
arrowClose.addEventListener("click",togglecarritomenu);
function toggledesktopmenu(){
    const asideclose= shoppingcartcontainer.classList.contains('inactive')
    if(!asideclose){
        shoppingcartcontainer.classList.add('inactive')
    }

    desktomenu.classList.toggle('inactive')  
}

function togglemobilemenu(){
    mobilemenu.classList.toggle("inactive");
    productDetail.classList.add("inactive");
    desktomenu.classList.add("inactive");
    productdetailcontainer.classList.add("inactive");

}

function togglecarritomenu(){

        productDetail.classList.toggle("inactive");
        desktomenu.classList.add("inactive");
        mobilemenu.classList.add("inactive");
        productdetailcontainer.classList.add("inactive"); 
    
}

function openproductdetail(){
    shoppingcartcontainer.classList.add('inactive')
    
    productdetailcontainer.classList.remove('inactive')
     
}
function closeproductdetail(){
    productdetailcontainer.classList.add('inactive')
    productDetail.classList.add("inactive");
    desktomenu.classList.add("inactive");
    mobilemenu.classList.add("inactive");
}
function toggleCloseMenu(){
    productDetail.classList.add("inactive");
    desktomenu.classList.add("inactive");
    mobilemenu.classList.add("inactive");
    productdetailcontainer.classList.remove("inactive");

}

function renderProducts(arr){
    arr.forEach(product => {
        const productcard=document.createElement('div')
        productcard.classList.add('product-card')
    
        const imga=document.createElement('img')
        imga.setAttribute('src',product.img)
        imga.addEventListener('click',function(){
            renderDetailsAside(product);
            toggleCloseMenu();
        } )
        
        
    
        const productinfo=document.createElement('div')
        productinfo.classList.add('product-info')
    
        const productinfodiv=document.createElement('div')
        const productprice=document.createElement('p')
        productprice.innerText='$'+product.price
    
        const productname=document.createElement('p')
        productname.innerText=product.name
    
        productinfodiv.appendChild(productprice)
        productinfodiv.appendChild(productname)
    
    
        const productFigure = document.createElement("figure");
        productFigure.addEventListener("click", function(){
            renderMyOrder(product);
        });
        const productfigureimg =document.createElement('img')
        productfigureimg.setAttribute('src','./icons/bt_add_to_cart.svg')
    
        productFigure.appendChild(productfigureimg)
    
        productinfo.appendChild(productinfodiv)
        productinfo.appendChild(productFigure)
    
        productcard.appendChild(imga)
        productcard.appendChild(productinfo)
    
        cardscontainer.appendChild(productcard)
    })
        
}
    

renderProducts(productlist)
function renderDetailsAside(product){
    productdetailcontainer.classList.remove('inactive');
    const productImgeDetail = document.querySelector('.detail-img')
    const productPrice = document.querySelector('.product-info-aside .product-price-detail');
    const productName = document.querySelector('.product-info-aside .product-name-detail');
    const productDescription = document.querySelector('.product-description-detail');
    productPrice.innerHTML = '$' + product.price;
    productName.innerHTML = product.name;
    productImgeDetail.setAttribute('src', product.img);
    productDescription.innerHTML = product.desc;
    const addtocart_button=document.createElement('button')
    addtocart_button.addEventListener("click", function(){
        renderMyOrder(product);
    })
    if(addtocart_button.length==1){
        productinfoaside.appendChild(addtocart_button)
    }
    if(addtocart_button.length >1){
        productinfoaside.remove(addtocart_button)
    }
}  

function myorder(product){

}


function renderMyOrder(product){
    //console.log("click");
    const shoppingCart = document.querySelector(".shopping-cart");

    const divShopingCart = document.createElement("div")
    divShopingCart.classList.add("div-ShopingCart")
    const figureMyOrder = document.createElement("figure");
    const imgIconMyOrder = document.createElement("img");
    imgIconMyOrder.setAttribute("src", product.img);
    const productName = document.createElement("p");
    productName.classList.add("name-my-order");
    productName.innerHTML =  product.name;
    const productPrice = document.createElement("p");
    productPrice.classList.add("price-my-order");
    productPrice.innerHTML = "$ "+ product.price;
    const imgIconDelete = document.createElement("img");
    imgIconDelete.setAttribute("src", "./icons/icon_close.png");

    shoppingCart.appendChild(divShopingCart);
    divShopingCart.appendChild(figureMyOrder);
    figureMyOrder.appendChild(imgIconMyOrder);
    divShopingCart.appendChild(productName);
    divShopingCart.appendChild(productPrice);
    divShopingCart.appendChild(imgIconDelete);

    /*---- Actualizamos la cantidad de productos y sumamos el resuktado.*/
    totalAmount.innerHTML = '$0.00'


    //const priceOrder = document.querySelectorAll(".price-my-order");
    //countShoppingCart.innerHTML = priceOrder.length;
    countShoppingCart.innerHTML = shoppingCart.childElementCount;
    totalAmount.innerHTML = Number(totalAmount.innerHTML.substring(1)) + product.price;
    arrayProductCart.push(Number(totalAmount.innerHTML));


    totalAmount.innerHTML ="$ "+ sumProducts(arrayProductCart); 

    /*Elimina producto de My Order* y actualiza eldato en el carrito*/
    imgIconDelete.addEventListener("click", function(){
        divShopingCart.remove();
        countShoppingCart.innerHTML = shoppingCart.childElementCount;

        const getTotal = document.querySelectorAll(".total-amount");
        const getTotalNumber = Number(Array.from(getTotal)[0].innerHTML.substring(1));

        getTotal[0].innerHTML = "$ " + (getTotalNumber - product.price);
        arrayProductCart.splice(-1,1); 
    })
}

function sumProducts(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
   

            


         
    
      







