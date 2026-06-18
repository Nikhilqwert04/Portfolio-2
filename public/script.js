let cursor = document.querySelector(".cursordelay")
let cursor2 = document.querySelector(".cursordelay2");
let cursor3 = document.querySelector(".cursordelay3");
let navbar = document.querySelector("#manv");
let icon = document.querySelector(".nav");
let NavTexts = document.querySelectorAll("#main a")
let board1 = document.querySelector(".board1");
let board2 = document.querySelector(".board2");
const QuoteDay = document.querySelector(".QuoteDay")
const QuoteAuther = document.querySelector(".QuoteAuther")

//Free Cursor
window.addEventListener("mousemove", function (detail) {
    cursor.style.top = detail.clientY - 23 + "px";
    cursor.style.left = detail.clientX - 23 + "px";
})



function setupBoard(board, customCursor) {
    board.addEventListener("mouseenter", () => {
        cursor.classList.add("hidden");
        customCursor.classList.remove("hidden");
    });

    board.addEventListener("mousemove", (e) => {
        customCursor.style.top = e.clientY - 23 + "px";
        customCursor.style.left = e.clientX - 23 + "px";
    });

    board.addEventListener("mouseleave", () => {
        customCursor.classList.add("hidden");
        cursor.classList.remove("hidden");
    });
}

setupBoard(board1, cursor2);
setupBoard(board2, cursor3);
//Animated Menu
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

async function GetQuote() {
	let response = await fetch("https://dummyjson.com/quotes/random");
	console.log(response);
	let data = await response.json();
    QuoteDay.textContent=data.quote;
    QuoteAuther.textContent=`-${data.author}`;
};

GetQuote();

