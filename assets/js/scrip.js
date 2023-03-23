

const dropdown = document.querySelector('.dropdown')
const languages = dropdown.querySelector('.languages')

// hiển thị phần chọn ngôn ngữ
dropdown.onclick = function() {
    languages.classList.toggle('active')
}

// hiển thị menu mobile
const menuMobile = document.querySelector('.menu-mobile')
const navMenu = document.querySelector('.nav-menu')
const xmark = document.querySelector('.xmark')
const bars = menuMobile.querySelector('i')

menuMobile.onclick = () => {
    
    if(bars.classList.replace('fa-bars', 'fa-xmark')){
        bars.classList.replace('fa-bars', 'fa-xmark')
        navMenu.style.left = 0
    }else if(bars.classList.replace('fa-xmark', 'fa-bars' )){
        bars.classList.replace('fa-xmark', 'fa-bars' )
        navMenu.style.left = '-320px'
    }
}

xmark.onclick = () =>{
    navMenu.style.left = '-320px'
    bars.classList.replace('fa-xmark', 'fa-bars' )
}