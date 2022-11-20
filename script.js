
// declare variables menu, closeImg, goTop, navbar 
let menu = document.querySelector(".menu");
let closeImg = document.querySelector(".closeImg");
let goTop = document.querySelector(".goUp");
let navbar = document.querySelector(".navbar");

// if menu button is clicked toggle closeImg  
// and show navbar
menu.onclick = () =>{
    menu.classList.toggle("closeImg");
    navbar.classList.toggle("active");
}

// window scroll close navbar 
window.onscroll = () =>{
    if (window.scrollY > 120){
        navbar.classList.remove("active");
        menu.classList.remove("closeImg");
        goTop.classList.add("active");

    }else{
        goTop.classList.remove("active");
    }
}

// when nav link is clicked add active class
// remove current active class
let navLink = document.querySelectorAll(".header .below .container .navbar .nav li a");
Array.from(navLink).forEach((item, index) => {
  item.onclick = (e) => {
    let currentNavLink = document.querySelector(".header .below .container .navbar .nav li a.active");
    currentNavLink.classList.remove("active");
    e.target.classList.add("active");
    navbar.classList.remove("active");
    menu.classList.remove("closeImg");
  }
});