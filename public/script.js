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
        navbar.style.animation =
            "mobileMenuOpen .6s ease forwards";
        setTimeout(function () {
            NavTexts.forEach(function (NavText) {
                NavText.classList.remove("hidden")
            })
        }, 300)
    } 
    else {
        navbar.style.animation =
            "mobileMenuClose .6s ease forwards";
        NavTexts.forEach(function (NavText) {
            NavText.classList.add("hidden")
        })
    }
    isOpen = !isOpen;
})
NavTexts.forEach(function (NavText) {
    NavText.addEventListener("click", function () {
        navbar.style.animation =
            "mobileMenuClose .6s ease forwards";
        NavTexts.forEach(function (link) {
            link.classList.add("hidden")
        });
        isOpen = false;
    })
})