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