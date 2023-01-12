const menuemail= document.querySelector('.navbar-email')
const desktomenu=document.querySelector('.desktop-menu')
const menuhamicon=document.querySelector('.menu')
const menucarritoicon=document.querySelector('.navbar-shopping-cart')
const productdetailcloseicon=document.querySelector('.product-detail-close')
const mobilemenu=document.querySelector('.mobile-menu')
const shoppingcartcontainer=document.querySelector('#shoppingcartcontainer')
const cardscontainer=document.querySelector('.cards-container')
const productdetailcontainer=document.querySelector('#productdetail')
menuemail.addEventListener('click',toggledesktopmenu)
menuhamicon.addEventListener('click',togglemobilemenu)
menucarritoicon.addEventListener('click',togglecarritomenu)
productdetailcloseicon.addEventListener('click', closeproductdetail)
function toggledesktopmenu(){
    const asideclose= shoppingcartcontainer.classList.contains('inactive')
    if(!asideclose){
        shoppingcartcontainer.classList.add('inactive')
    }

    desktomenu.classList.toggle('inactive')  
}

function togglemobilemenu(){
    const asideclose= shoppingcartcontainer.classList.contains('inactive')
    if(!asideclose){
        shoppingcartcontainer.classList.add('inactive')
    }
    closeproductdetail()
    mobilemenu.classList.toggle('inactive')
}

function togglecarritomenu(){
    const mobilemenuclose= mobilemenu.classList.contains('inactive')
    const desktopmenuclose= desktomenu.classList.contains('inactive')
    if(!mobilemenuclose){
        mobilemenu.classList.add('inactive')
    }
    if(!desktopmenuclose){
        desktomenu.classList.add('inactive')

    }
    const prodcutodetailclose= productdetailcontainer.classList.contains('inactive')
    if(!prodcutodetailclose){
        productdetailcontainer.classList.add('inactive')
    }
    shoppingcartcontainer.classList.toggle('inactive')
}
function openproductdetail(){
    shoppingcartcontainer.classList.add('inactive')

    productdetailcontainer.classList.remove('inactive')
}
function closeproductdetail(){
    productdetailcontainer.classList.add('inactive')
}
const productlist =[]
productlist.push({
    name: 'bike'
    ,price: 120,
    img :'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})

productlist.push({
    name: 'computador'
    ,price: 500,
    img :'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})

productlist.push({
    name: 'consola de videojuegos nintendo switch lite'
    ,price: 600,
    img :'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})

function renderProducts(arr){
    for(product of arr){
        const productcard=document.createElement('div')
        productcard.classList.add('product-card')
    
        const imga=document.createElement('img')
        imga.setAttribute('src',product.img)
        imga.addEventListener('click', openproductdetail)


        const productinfo=document.createElement('div')
        productinfo.classList.add('product-info')
    
        const productinfodiv=document.createElement('div')
        const productprice=document.createElement('p')
        productprice.innerText='$'+product.price
    
        const productname=document.createElement('p')
        productname.innerText=product.name
    
        productinfodiv.appendChild(productprice)
        productinfodiv.appendChild(productname)
    
    
        const productinfofigure=document.createElement('figure')
        const productfigureimg =document.createElement('img')
        productfigureimg.setAttribute('src','./icons/bt_add_to_cart.svg')
    
        productinfofigure.appendChild(productfigureimg)
    
        productinfo.appendChild(productinfodiv)
        productinfo.appendChild(productinfofigure)
    
        productcard.appendChild(imga)
        productcard.appendChild(productinfo)
    
        cardscontainer.appendChild(productcard)
    }
}

renderProducts(productlist)