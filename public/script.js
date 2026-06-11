let cursor = document.querySelector(".cursordelay")

window.addEventListener("mousemove", function (detail) {
    cursor.style.top = detail.clientY - 23 + "px";
    cursor.style.left = detail.clientX - 23 + "px";
})

let navbar = document.querySelector("#manv");
let icon = document.querySelector(".nav");
let NavTexts = document.querySelectorAll("#main a")

let isOpen = false;
icon.addEventListener("click", function () {
    if (!isOpen) {
        navbar.style.animation ="mobileMenuOpen .6s ease forwards";
    } 
    else {
        navbar.style.animation ="mobileMenuClose .6s ease forwards";
    }
    isOpen = !isOpen;
})
NavTexts.forEach(function (NavText) {
    NavText.addEventListener("click", function () {
        navbar.style.animation ="mobileMenuClose .6s ease forwards";
        isOpen = false;
    })
})

//Discorver me button
let discoverbtn = document.querySelector(".discoverbtn");
let discovericon = document.querySelector(".discovericon");

discoverbtn.addEventListener("mouseover",function(){
    discoverbtn.classList.remove("w-29");
    discoverbtn.classList.add("w-32");
    discovericon.classList.remove("hidden");
})

discoverbtn.addEventListener("mouseout",function(){
    discoverbtn.classList.remove("w-32");
    discoverbtn.classList.add("w-29");
    discovericon.classList.add("hidden");
})