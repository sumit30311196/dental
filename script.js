const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");


hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    // navLink.style.display = "block";
    navMenu.classList.toggle("active");
});

navLink.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
});