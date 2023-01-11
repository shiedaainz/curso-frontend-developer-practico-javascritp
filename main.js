const menuemail= document.querySelector('.navbar-email')
const desktomenu=document.querySelector('.desktop-menu')
menuemail.addEventListener('click',toggledesktopmenu)

function toggledesktopmenu(){
  desktomenu.classList.toggle('inactive')  
}