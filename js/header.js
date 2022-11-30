// Get Elements from the DOM
const menBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');
const menu = document.querySelector('.menu');

// PX offset when the navbar activates
const offset = 50;

// Add click event to menu button
menBtn.addEventListener('click', () => {
    // toggle the menu open class
    menu.classList.toggle('menu-open');
});

// Add Scroll event listener to the page
window.addEventListener("scroll", () => {
    // if the page is scrolled by 50px or more
    if (scrollY > offset) {
        navbar.classList.add('navbar-active');
    } else {
        // deactivate navbar
        navbar.classList.remove('navbar-active');
    }
});



const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        nav.classList.add('active_nav');
        logo.classList.add('none')
        // logoVisible.classList.add('hidden');
        logoVisible.classList.add('visible')
    } else {
        nav.classList.remove('active_nav');
        logo.classList.remove('none')
        logoVisible.classList.remove('visible')
    }       
})


// const dropdown = document.querySelectorAll('.dropdown-item');
// window.addEventListener('scroll',()=>{
//     if(window.scrollY >= 50){
//         dropdown.classList.add('set');
//     }
// })

const logo = document.querySelector('.logo-1');
const logoVisible = document.querySelector('.logo');
