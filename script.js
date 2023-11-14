
///GET ALL ELEMENTS TO BE USED///
const hamburger = document.getElementById("hamburger");
const contactBtn = document.getElementById("contactBtn");
const links = document.getElementsByClassName("links");


///HAMBURGER FUNCTIONALITY (SHOW NAVBAR)///
function showNavbar (){
    const navbar = document.getElementById("navUl");
    navbar.classList.toggle("active");

    const overlay = document.getElementById("overlay");
    overlay.classList.toggle("overlayClass");

    const hamburger = document.getElementById("hamburger");
    hamburger.classList.toggle("lineAni");

    const body = document.querySelector("body")
    body.classList.toggle("removeScroll")
};

///ASSIGN THE HAMBURGER FUNCTIONALITY TO HAMBURGER ELEMENT///
hamburger.onclick = () =>{
    showNavbar()
};


///LOOP THROUGH THE LINKS CLASS///
for(var i = 0; i < links.length; i++){
    links[i].addEventListener('click', showNavbar)
};


///ASSIGN THE HAMBURGER FUNCTIONALITY TO CONTACT BUTTON///
contactBtn.addEventListener('click', showNavbar);