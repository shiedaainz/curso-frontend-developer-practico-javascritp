const menuemail= document.querySelector('.navbar-email')
const desktomenu=document.querySelector('.desktop-menu')
const menuhamicon=document.querySelector('.menu')
const menucarritoicon=document.querySelector('.navbar-shopping-cart')
const mobilemenu=document.querySelector('.mobile-menu')
const aside=document.querySelector('.product-detail')
menuemail.addEventListener('click',toggledesktopmenu)
menuhamicon.addEventListener('click',togglemobilemenu)
menucarritoicon.addEventListener('click',togglecarritomenu)

function toggledesktopmenu(){
    const asideclose= aside.classList.contains('inactive')
    if(!asideclose){
        aside.classList.add('inactive')
    }

    desktomenu.classList.toggle('inactive')  
}

function togglemobilemenu(){
    const asideclose= aside.classList.contains('inactive')
    if(!asideclose){
        aside.classList.add('inactive')
    }
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
    aside.classList.toggle('inactive')
}